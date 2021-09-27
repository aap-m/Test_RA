import { LightningElement,api } from 'lwc';

export default class AccountGallery extends LightningElement {
    @api accountId;
        
    selectedAccountId;

    handleAccountSelected(event) {
        this.selectedAccountId = event.detail; 
    }
}