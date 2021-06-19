import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.css']
})
export class MetricsComponent implements OnInit {
  public fileToUpload: File = null;
  public isFile = false;
  public isPlay = true;
  constructor(private httpService: HttpClient) { }


  ngOnInit () {  }
  myFiles:string [] = [];
  sMsg:string = '';

  getFileDetails (e) {
    console.log (e.target.files);

    for (var i = 0; i < e.target.files.length; i++) {
      this.myFiles.push(e.target.files[i]);
    }
  }
  uploadFiles () {
    this.isPlay=false;
    const frmData = new FormData();
    console.log(frmData);
    for (var i = 0; i < this.myFiles.length; i++) {
      frmData.append("fileUpload", this.myFiles[i]);
    }

    this.httpService.post('https://flask-api-miriteam.herokuapp.com/files', frmData).subscribe(
      data => {
        // SHOW A MESSAGE RECEIVED FROM THE WEB API.
        this.sMsg = data as string;
        console.log (this.sMsg);
        this.isFile = true;
        this.isPlay = true;
      },

    );
    this.myFiles =[];
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    console.log(this.fileToUpload);
    this.isFile=true;
  }




}
