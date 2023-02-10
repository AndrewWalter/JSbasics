const address = {
    street: "Antrim Road",
    city: "Belfast",
    postCode: "BT36 5HQ",
    showAddress: function(){
        console.log(`This address is on ${address.street} in ${address.city} with this post code ${address.postCode}`);
    }
}
function createAddress(street, city, postCode){
    return {
        street,
        city,
        postCode, 
        showAddress: function(){
            console.log(`This address is on ${this.street} in ${this.city} with this post code ${this.postCode}`);
        }
    }
}
function Address(street, city, postCode){
    this.street = street;
    this.city = city;
    this.postCode = postCode;
    this.showAddress = function() {
        console.log(`This address is on ${this.street} in ${this.city} with this post code ${this.postCode}`)
    }
}
let addressOne = createAddress("a", "b", "c");
let addressTwo = new Address("d", "e", "f");
console.log("Original object");
address.showAddress();
console.log("Factory made object");
addressOne.showAddress();
console.log("Constructor made object");
addressTwo.showAddress();

let address1 = new Address("a", "b", "c");
let address2 = new Address("a", "b", "c");
function areEqual(address1, address2){
    if(address1.street === address2.street && address1.city === address2.city && address1.postCode === address2.postCode){
        return true;
    }else{
        return false;
    }
}

function areSame(address1, address2){
    if(address1 === address2){
        return true;
    }else{
        return false;
    }
}
console.log(areSame(address1, address2));
console.log(areEqual(address1, address2));