import {Component, OnInit} from '@angular/core';
import {Person} from "../../model/person";
import {FormControl, FormGroup} from "@angular/forms";
import {PersonService} from "../../service/person.service";
import {AngularFireStorage} from "@angular/fire/storage";
import {Router} from "@angular/router";
import {finalize} from "rxjs/operators";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  person: Person;
  selectedImg: any = null;
  personForm: FormGroup;

  constructor(private personService: PersonService,
              private storage: AngularFireStorage,
              private router: Router) {
    this.personForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      imgUrl: new FormControl()
    })
  }

  ngOnInit(): void {
    this.getALL()
  }

  createSubmit() {
    const urlName = this.selectedImg.name
    const fileStore = this.storage.ref(urlName)
    this.storage.upload(urlName, this.selectedImg).snapshotChanges().pipe(
      finalize(() => {
        fileStore.getDownloadURL().subscribe((url) => {
          this.personForm.patchValue(({}))
        })
        this.personService.createPerson(this.personForm.value).subscribe(() => {
          this.router.navigateByUrl('')

        })
      })
    )

  }

  upload(event: any) {
    this.selectedImg = event.target.files[0]
  }

  getALL() {
    // @ts-ignore
    return this.personService.fileList().subscribe(next => {
      this.person=next
    })
  }
}
