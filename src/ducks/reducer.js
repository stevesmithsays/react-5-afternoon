//  *** CREATE STATE'S INITIAL VALUES *** //
 let initialState = {
    loanType: 'Home Purchase',
    propertyType: 'Single Family Home',
    city: '',
    propToBeUsedOn: '',
    found: false,
    realEstateAgent: "false",
    cost: 0,
    downPayment: 0,
    credit: '',
    history: '',
    addressOne: '',
    addressTwo: '',
    addressThree: '',
    firstName: '',
    lastName: '',
    email: ''
 }

//  *** ACTION TYPES HERE *** //
const UPDATE_LOAN_TYPE = "UPDATE_LOAN_TYPE";
const UPDATE_PROPERTY_TYPE = "UPDATE_PROPERTY_TYPE"; 
const UPDATE_CITY = "UPDATE_CITY";
const UPDATE_PROP = "UPDATE_PROP";
const UPDATE_FOUND = "UPDATE_FOUND";

// *** REDUCER HERE VVV *** //

function reducer(state = initialState, action){
    switch ( action.type ) {
        case UPDATE_LOAN_TYPE:
            return Object.assign( {}, state, {loanType: action.payload} );
        case UPDATE_PROPERTY_TYPE:
            return Object.assign( {}, state, {propertyType: action.payload} );  
        case UPDATE_CITY:
        return Object.assign({}, state, {city : action.payload} );          
        case UPDATE_PROP:
        return Object.assign({}, state, {propsToBeUsedOn: action.payload} );
        case UPDATE_FOUND:
        return Object.assign({}, state, {})
    
        default: return state;
    }
}

// *** ACTION CREATOR HERE *** //
// *** All an action creator does is return an object with a type and payload property. The payload will equal the value of the parameter in this case. *** //

export function updateLoanType( loanType ){
    return {
        type: UPDATE_LOAN_TYPE,
        payload: loanType
    }
}
export function updatePropertyType( property ){
    return {
        type: UPDATE_PROPERTY_TYPE,
        payload: property
    }
}

export function updateCity( city ){
    return{
        type: UPDATE_CITY,
        payload: city
    }
}

export function updateProp ( prop ){
    return{
        type: UPDATE_PROP,
        payload: prop
    }
}
 export function updateFound ( found ){
    return{
        type: UPDATE_FOUND,
        payload: found
    }
}

// 
export default reducer;
