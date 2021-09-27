import { LightningElement, wire, api } from 'lwc';
import getAccount from '@salesforce/apex/ControllerAccountGallery.getAccount'

import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import Type from '@salesforce/schema/Account.Type';

export default class AccountList extends LightningElement {
    recordList;
    initialRecordList;
    statusPickListValues = [{ label: "All", value: "All" }];
    
    @wire (getAccount)
    account({data, error}) {
        if (data) {
            this.recordList = data;
            this.initialRecordList = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.recordList = undefined;
            this.initialRecordList = undefined;
        } 
    }

    @wire(getPicklistValues, {
        recordTypeId: "012000000000000AAA",
        fieldApiName: Type
    })
    statusPickLists({ error, data }) {
        if (error) {
            console.error("error", error);
        } else if (data) {
            this.statusPickListValues = [
                { label: "All", value: "All" },
                ...data.values
            ];
        }
    }

    @api getId;
    @api getLogo;

    typeChange;

    handleTypeChange(event) {
        this.typeChange=event.target.value;
            if (this.typeChange === "All") {
                this.recordList=this.initialRecordList;
            } else {
                this.filterType();
            }
    }

    filterData;

    filterType() {
        this.filterData = this.initialRecordList.filter(account => account.Type === this.typeChange);
        this.recordList=this.filterData;
        
    }
    
    handleTileClick(event) {
        this.dispatchEvent(new CustomEvent('accountselected', {detail: event.detail}));
    }
}