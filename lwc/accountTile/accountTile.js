import { LightningElement, api } from 'lwc';

export default class AccountTile extends LightningElement {
    @api subject;

    @api getId;
    @api getLogo;
    
    tileClick(event) {        
        this.dispatchEvent(new CustomEvent('tileclick', {detail: event.currentTarget.name}));
    }
}