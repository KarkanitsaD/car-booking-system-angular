import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ImageModel} from "../../domain/models/image.model";

@Component({
  selector: 'app-images-uploader',
  templateUrl: './images-uploader.component.html',
  styleUrls: ['./images-uploader.component.scss']
})
export class ImagesUploaderComponent implements OnInit {

  @Input() disabled: boolean = false;
  @Input() images: ImageModel[] = [];
  @Output() imagesChange = new EventEmitter<ImageModel[]>();

  constructor() { }

  ngOnInit(): void {
  }

  public remove(index: number): void {
    this.images.splice(index,1);
    this.imagesChange.emit(this.images);
  }

  public onImageSelected(event: Event): void {
    let input = event.target as HTMLInputElement;
    if(input.files && input.files.length > 0) {
      let selectedImageFile = input.files[0];
      let fileReader = new FileReader();
      fileReader.readAsDataURL(selectedImageFile);
      fileReader.onload = () => {
        let imageUrl = fileReader.result as string;
        let image: ImageModel = new ImageModel(imageUrl);
        this.images.push(image);
        this.imagesChange.emit(this.images);
      }
    }
  }
}
