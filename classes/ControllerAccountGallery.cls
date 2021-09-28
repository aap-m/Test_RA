public with sharing class ControllerAccountGallery {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccount(){
        return [SELECT Id, Name, Logo__c FROM Account LIMIT 15];
    }
}
