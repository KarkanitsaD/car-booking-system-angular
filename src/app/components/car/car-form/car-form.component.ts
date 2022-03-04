import {Component, Input, OnInit} from '@angular/core';
import {CarModel} from "../../../domain/models/car/car.model";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ImageModel} from "../../../domain/models/image.model";
import {CreateCarRequestModel} from "../../../domain/models/car/create-car-request.model";
import {UpdateCarRequestModel} from "../../../domain/models/car/update-car-request.model";

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.scss']
})
export class CarFormComponent implements OnInit {

  @Input() isEditMode: boolean = false;
  @Input() carModel!: CarModel;
  @Input() rentalPointId!: string;

  carForm!: FormGroup;
  carImages: ImageModel[] = [];
  carImagesTouched: boolean = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.carForm = this.fb.group({
      pricePerDay: new FormControl(this.carModel.pricePerDay, [Validators.required]),
      brand: new FormControl(this.carModel.brand, [Validators.required]),
      model: new FormControl(this.carModel.model, [Validators.required]),
      fuelConsumption: new FormControl(this.carModel.fuelConsumption, [Validators.required]),
      numberOfSeats: new FormControl(this.carModel.numberOfSeats, [Validators.required]),
      carTransmissionId: new FormControl(this.carModel.carTransmissionId, [Validators.required]),
    });
    this.carImages = this.carModel.images;
  }

  public create(): void {
    if(this.carForm.valid && this.carImages.length > 0) {
      let createCarRequest: CreateCarRequestModel = new CreateCarRequestModel(
        Number(this.carForm.controls.pricePerDay.value),
        this.carForm.controls.brand.value,
        this.carForm.controls.model.value,
        this.carForm.controls.fuelConsumption.value,
        Number(this.carForm.controls.numberOfSeats.value),
        this.carForm.controls.carTransmissionId.value,
        this.rentalPointId,
        this.carImages
      );
      // do something
    } else {
      this.toucheForm();
    }
  }

  public update(): void {
    if(this.carForm.valid && this.carImages.length > 0) {
      let updateCarRequest: UpdateCarRequestModel = new UpdateCarRequestModel(
        Number(this.carForm.controls.pricePerDay.value),
        this.carImages
      );
     //do something
    } else {
      this.toucheForm();
    }
  }

  private toucheForm(): void {
    this.carForm.markAllAsTouched();
    this.carImagesTouched = true;
  }
}
