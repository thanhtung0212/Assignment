import { Injectable } from "@angular/core";
import 'rxjs/add/operator/toPromise';
import { AngularFireAuth, } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { User } from './user.model'

@Injectable()
export class AuthService {

  constructor(
    public afAuth: AngularFireAuth,
    public afs: AngularFirestore
  ) { }



  doRegister(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
        .then(res => {
          resolve(res);
        }, err => reject(err))
    })
  }

  async doLogin(value) {
    const credential = await firebase.auth().signInWithEmailAndPassword(value.email, value.password)
    return this.updateUserData(credential.user)
  }

  doLogout() {
    return new Promise((resolve, reject) => {
      if (firebase.auth().currentUser) {
        this.afAuth.auth.signOut();
        resolve();
      }
      else {
        reject();
      }
    });
  }

  updateUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    )
    const data: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    }
    return userRef.set(data, { merge: true })
  }
  ResetPassword(value: string) {
    // email = value.email

    console.log("email ");
    return this.afAuth.auth.sendPasswordResetEmail(value, { url: `${window.location.origin}/login` })

    // console.log("====== sucess", value);

    // firebase.auth().sendPasswordResetEmail(value,
    //   { url: 'http://localhost:4200/_/core' })
    // document.getElementById('result').innerHTML = "Thành công! Một liên kết đặt lại mật khẩu đã gữi đến email của bạn."

  }



}
