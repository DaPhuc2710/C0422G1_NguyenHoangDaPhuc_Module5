import {Component, Inject, OnInit} from '@angular/core';
import {Thai} from "../../model/thai";
import {FormControl, FormGroup} from "@angular/forms";
import {TestTrangService} from "../../service/test-trang.service";
import {AngularFireStorage} from "@angular/fire/storage";
import {finalize} from "rxjs/operators";
import {Router} from "@angular/router";


@Component({
  selector: 'app-vinh',
  templateUrl: './vinh.component.html',
  styleUrls: ['./vinh.component.css']
})
export class VinhComponent implements OnInit {
  thai:Thai;
  formCreate:FormGroup;
  selectImg:any=null;
  constructor(private service:TestTrangService,
              @Inject(AngularFireStorage)private storages:AngularFireStorage,
              private route:Router) {
    this.formCreate=new FormGroup(
      {
        id:new FormControl(""),
        name:new FormControl(""),
        img:new FormControl(""),
      }
    )
  }

  ngOnInit(): void {
    this.getAll();
  }

  createSubmit() {
    const fileName=this.selectImg.name
    const fileVinh=this.storages.ref(fileName)
    this.storages.upload(fileName,this.selectImg).snapshotChanges().pipe(
      finalize(()=>{
        fileVinh.getDownloadURL().subscribe((url)=>{
          this.formCreate.patchValue(({img:url}))
        })
        console.log(this.formCreate.value)
        this.service.themMoi(this.formCreate.value).subscribe(()=>{
          this.route.navigateByUrl("")
        })
      })
    )
  }

  upload(event: any) {
    this.selectImg=event.target.files[0]
  }

  private getAll() {
    // @ts-ignore
    return this.service.listFile().subscribe(n=>{
      this.thai=n;
      console.log(this.thai)
    })
  }
}
