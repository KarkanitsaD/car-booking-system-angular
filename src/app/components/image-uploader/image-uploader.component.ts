import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ImageModel} from "../../domain/models/image.model";

export const userDefaultImageUrl ="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/150/000000/external-user-interface-kiranshastry-lineal-kiranshastry-1.png";

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss']
})
export class ImageUploaderComponent implements OnInit {

  imageUrl: string = userDefaultImageUrl;

  isUploadButtonVisible: boolean = true;

  @Output() onImageSelectedChanges = new EventEmitter<ImageModel | null>();
  @Input() disabled: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public onImageSelected(event: any): void {
    let input = event.target as HTMLInputElement;
    if(input.files && input.files.length > 0) {
      let selectedImageFile = input.files[0];
      let fileReader = new FileReader();
      fileReader.readAsDataURL(selectedImageFile);
      fileReader.onload = () => {
        let imageUrl = fileReader.result as string;
        this.imageUrl = imageUrl;
        this.onImageSelectedChanges.emit(new ImageModel(imageUrl));
        this.isUploadButtonVisible = false;
      }
    } else {
      this.cancelSelection();
    }
  }

  public cancelSelection() {
    this.isUploadButtonVisible = true;
    this.imageUrl = userDefaultImageUrl;
    this.onImageSelectedChanges.emit(null);
  }
}
