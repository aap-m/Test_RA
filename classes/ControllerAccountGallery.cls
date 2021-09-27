public with sharing class ControllerAccountGallery {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccount(){
        return [SELECT Name, OwnerId, Owner.Name, Budget__c, employee_number__c, Type, Logo__c, Description, Industry 
                FROM Account 
                LIMIT 15];
    }
}
