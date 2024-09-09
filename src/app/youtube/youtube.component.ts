import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ApiService } from '../service/api.service';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-youtube',
  standalone: true,
  imports: [
    RouterModule, FormsModule, CommonModule,
  ],
  templateUrl: './youtube.component.html',
  styleUrl: './youtube.component.scss'
})
export class YoutubeComponent {

  title = '';
  searchInput: string;
  items: any[];
  url: string;

  constructor(private apiService: ApiService, private http: HttpClient) {
    this.searchInput = 'Junior NTR Songs';
    this.items = [];
    this.url = '';
  }


  // Life Cycle of Angular
  ngOnInit() {
    console.log('ng life cycle')
    this.search()
  }

  search() {
    console.log('Search');
    const googleAPIKey = environment.googleAPIKey;
    let url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10';
    url += `&q=${this.searchInput}`;
    url += '&type=video&order=relevance';
    url += '&key=' + googleAPIKey;
    this.url = url;
    console.log(url);

    // fetch the data
    this.apiService.getItems(url).subscribe((data: any) => {
      console.log(data);
      const result = data['items'];

      if (result !== undefined) {
        const items: any[] = [];
        result.forEach((element: any) => {
          const id = element['id']['videoId']
          const title = element['snippet']['channelTitle']
          const description = element['snippet']['description']
          const thumbnail = element['snippet']['thumbnails']['high']['url']
          items.push({ id: id, title: title, description: description, thumbnail: thumbnail })
        });
        this.items = items;
      }
    });
  }


  sendWAMessage() {
    console.log("WhatsApp message function invoked")
    const url = environment.wa_business_url
    const token = environment.wa_token

    const requestData = {
      messaging_product: "whatsapp",
      to: "919047048344",
      type: "template",
      template: {
        name: "hello_world",
        language: {
          code: "en_US"
        }
      }
      //       type: 'text',
      //       text: {
      //         body: 'This message is from Algox Fusion Private Limited\
      //  We are expecting you to join the meeting.'
      //       }
    }

    // Post the API call
    this.apiService.postItems(url, requestData, token).subscribe((data: any) => {
      console.log(data);
    }, (error: any) => {
      console.log(error);
    });
  }
}
