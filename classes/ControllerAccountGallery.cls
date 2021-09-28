public with sharing class ControllerAccountGallery {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccount(){
        return [SELECT Id, Name, Type, Logo__c FROM Account LIMIT 15];
    }
}
