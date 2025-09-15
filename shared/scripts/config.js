const GUEST_LOGINS = {
    customer: {
        username: 'GuestCustomer',
        password: 'guestcustomer123'
    },
    business: {
        username: 'GuestBusiness',
        password: 'guestbusiness123'
    }
}

const GUEST_REGIST = {
    customer: {
        'username': 'GuestCustomer',
        'email': 'guestcustomer@example.com',
        'password': 'guestCustomer123',
        'repeated_password': 'guestCustomer123'
    },

    business: {
        'username': 'GuestBusiness',
        'email': 'guestbusiness@example.com',
        'password': 'guestBusinsess123',
        'repeated_password': 'guestBusinsess123'
    }
}

const API_BASE_URL = 'http://127.0.0.1:8000/api/';
const STATIC_BASE_URL = 'http://127.0.0.1:8000/';


const LOGIN_URL = 'login/';

const REGISTER_URL = 'registration/';

const PROFILE_URL = 'profile/';

const BUSINESS_PROFILES_URL = 'profiles/business/';

const CUSTOMER_PROFILES_URL = 'profiles/customer/';

const REVIEW_URL = 'reviews/';

const ORDER_URL = 'orders/';

const OFFER_URL = 'offers/';

const OFFER_DETAIL_URL = 'offerdetails/';

const BASE_INFO_URL = 'base-info/';

const OFFER_INPROGRESS_COUNT_URL = 'order-count/';
const OFFER_COMPLETED_COUNT_URL = 'completed-order-count/';

const PAGE_SIZE = 6