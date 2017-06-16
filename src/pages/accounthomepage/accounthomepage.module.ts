import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccounthomepagePage } from './accounthomepage';

@NgModule({
  declarations: [
    AccounthomepagePage,
  ],
  imports: [
    IonicPageModule.forChild(AccounthomepagePage),
  ],
  exports: [
    AccounthomepagePage
  ]
})
export class AccounthomepagePageModule {}
