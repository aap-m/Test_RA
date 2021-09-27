import { LightningElement, wire, api } from 'lwc';
import getAccount from '@salesforce/apex/ControllerAccountGallery.getAccount'

import { NavigationMixin } from 'lightning/navigation';

export default class AccountDetail extends NavigationMixin (LightningElement) {
    @wire (getAccount)
    accounts;

    _accountId;
    subject;
    detailForm=false;

    @api get accountId(){
        return this._accountId;
    }
    
    set accountId(value) {
        this._accountId = value;
        if (this._accountId == undefined) {
            this.subject = [];
        } else {
            this.subject = this.accounts.data.find(account => account.Id === this._accountId);
            this.detailForm = true;
        }
    }

    navigateFullDetails() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: this._accountId,
                objectApiName: 'Account',
                actionName: 'view'
            }
        });
    }
}