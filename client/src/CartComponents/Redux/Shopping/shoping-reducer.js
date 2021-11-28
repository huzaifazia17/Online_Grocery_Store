import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
    products: [
        {
            id: 1,
            title: "A5 Wagyu Beef",
            description:
                "Top Quality beef, coming straight from Japan. It will cook in its own fat no need for extra oil. Highly Recommended. Note: Price is per Steak",
            price: 150.0,
            image:
                "https://www.dartagnan.com/dw/image/v2/AALC_PRD/on/demandware.static/-/Sites-dartagnan-live-catalog-en/default/dwace649cb/images/products/KITJP001-1.jpg",
        },
        {
            id: 2,
            title: "Whole Chicken",
            description:
                "Amazing whole chicken. Home grown with no chemcials. GMO. Will change your experience of chickens. Note: Price is per Chicken",
            price: 10,
            image:
                "https://images.unsplash.com/photo-1602534923950-d2c7e6be0ca0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80",
        },
        {
            id: 3,
            title: "Ground Beef",
            description:
                "Amazing whole chicken. Home grown with no chemcials. GMO. Will change your experience of chickens. This is a great buy",
            price: 15,
            image:
                "https://th.bing.com/th/id/OIP.IZsjA66bBm5Flh9AJ7FmbwHaHZ?pid=ImgDet&rs=1",
        },
        {
            id: 4,
            title: "Ground Chicken",
            description:
                "Amazing whole chicken. Home grown with no chemcials. GMO. Will change your experience of chickens. This is a great buy",
            price: 15,
            image:
                "https://www.kitchenfrau.com/wp-content/uploads/2018/02/IMG_1906est.jpg",
        },
        {
            id: 5,
            title: "Normal Beef",
            description:
                "Amazing whole chicken. Home grown with no chemcials. GMO. Will change your experience of chickens. This is a great buy",
            price: 12,
            image:
                "https://images.unsplash.com/photo-1546964124-0cce460f38ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmVlZnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
            id: 6,
            title: "Ribs",
            description:
                "Amazing whole chicken. Home grown with no chemcials. GMO. Will change your experience of chickens. This is a great buy",
            price: 19,
            image:
                "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmlic3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
            id: 7,
            title: "Asparagus",
            description:
                "Amazing whole chicken. Home grown with no chemcials. GMO. Will change your experience of chickens. This is a great buy",
            price: 3,
            image:
                "https://images.unsplash.com/photo-1595855759920-86582396756a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXNwYXJhZ3VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
            id: 8,
            title: "Avocado",
            description:
                "Amazing whole chicken. Home grown with no chemcials. GMO. Will change your experience of chickens. This is a great buy",
            price: 4,
            image:
                "https://images.unsplash.com/photo-1590431306482-f700ee050c59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZvY2Fkb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
            id: 9,
            title: "Bean",
            description:
                "Amazing whole chicken. Home grown with no chemcials. GMO. Will change your experience of chickens. This is a great buy",
            price: 5,
            image:
                "https://images.unsplash.com/photo-1612257416648-ee7a6c533b4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmVhbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
            id: 10,
            title: "Broccoli",
            description:
                "TAmazing whole chicken. Home grown with no chemcials. GMO. Will change your experience of chickens. This is a great buy",
            price: 2,
            image:
                "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnJvY2NvbGl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        },
        {
            id: 11,
            title: "Cucumber",
            description:
                "Amazing whole chicken. Home grown with no chemcials. GMO. Will change your experience of chickens. This is a great buy",
            price: 2,
            image:
                "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3VjdW1iZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        },
        {
            id: 12,
            title: "Lettuce",
            description:
                "Amazing whole chicken. Home grown with no chemcials. GMO. Will change your experience of chickens. This is a great buy",
            price: 3,
            image:
                "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGV0dHVjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
            id: 13,
            title: "Apple",
            description:
                "Amazing whole chicken. Home grown with no chemcials. GMO. Will change your experience of chickens. This is a great buy",
            price: 1,
            image:
                "https://media.istockphoto.com/photos/closeup-of-red-royal-gala-apples-picture-id184927564?b=1&k=20&m=184927564&s=170667a&w=0&h=OfqJc0D1xZzARSYPpf2g3vmO6-otOqUvlg_WuidnbA4=",
        },
        {
            id: 14,
            title: "BlackBerry",
            description:
                "Amazing whole chicken. Home grown with no chemcials. GMO. Will change your experience of chickens. This is a great buy",
            price: 7,
            image:
                "https://images.unsplash.com/photo-1567870335471-1129836babcf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2tiZXJyeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
            id: 15,
            title: "BlueBerry",
            description:
                "Amazing whole chicken. Home grown with no chemcials. GMO. Will change your experience of chickens. This is a great buy",
            price: 7,
            image:
                "https://media.istockphoto.com/photos/tasty-blueberry-smoothie-in-glass-picture-id1156323059?b=1&k=20&m=1156323059&s=170667a&w=0&h=dp3CxgAZrp1AcegflrmOIgbCnkdfWpDgXBDk1vjfFVY=",
        },
        {
            id: 16,
            title: "Melon",
            description:
                "Amazing whole chicken. Home grown with no chemcials. GMO. Will change your experience of chickens. This is a great buy",
            price: 5,
            image:
                "https://media.istockphoto.com/photos/group-shoot-of-sliced-cantaloupe-melons-picture-id454265781?b=1&k=20&m=454265781&s=170667a&w=0&h=I9K7X3RYeKraq_1J-elmOYRltFd5J3_q9KKDAW2kCQo=",
        },
        {
            id: 17,
            title: "Pears",
            description:
                "Amazing whole chicken. Home grown with no chemcials. GMO. Will change your experience of chickens. This is a great buy",
            price: 4,
            image:
                "https://images.unsplash.com/photo-1514756331096-242fdeb70d4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        },
        {
            id: 18,
            title: "WaterMelon",
            description:
                "Amazing whole chicken. Home grown with no chemcials. GMO. Will change your experience of chickens. This is a great buy",
            price: 7,
            image:
                "https://images.unsplash.com/photo-1563114773-84221bd62daa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2F0ZXJtZWxvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
            id: 19,
            title: "Bagels",
            description:
                "Amazing whole chicken. Home grown with no chemcials. GMO. Will change your experience of chickens. This is a great buy",
            price: 5,
            image:
                "https://images.unsplash.com/photo-1610735458851-bf3be7078588?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFnZWxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
            id: 20,
            title: "Regular Bread",
            description:
                "Amazing whole chicken. Home grown with no chemcials. GMO. Will change your experience of chickens. This is a great buy",
            price: 3,
            image:
                "https://images.unsplash.com/photo-1486887396153-fa416526c108?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVndWxhciUyMGJyZWFkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
            id: 21,
            title: "Brioche Bread",
            description:
                "Amazing whole chicken. Home grown with no chemcials. GMO. Will change your experience of chickens. This is a great buy",
            price: 10,
            image:
                "https://images.unsplash.com/photo-1509457031524-987028ebc6ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YnJpb2NoZSUyMGJyZWFkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
            id: 22,
            title: "Fresh Buns",
            description:
                "Amazing whole chicken. Home grown with no chemcials. GMO. Will change your experience of chickens. This is a great buy",
            price: 9,
            image:
                "https://images.unsplash.com/photo-1575282253346-e5eb3a9f12d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnJlc2glMjBidW5zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
            id: 23,
            title: "Cookies",
            description:
                "Amazing whole chicken. Home grown with no chemcials. GMO. Will change your experience of chickens. This is a great buy",
            price: 10,
            image:
                "https://images.unsplash.com/photo-1548365328-8c6db3220e4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29va2llc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
            id: 24,
            title: "Doughnuts",
            description:
                "Amazing whole chicken. Home grown with no chemcials. GMO. Will change your experience of chickens. This is a great buy",
            price: 10,
            image:
                "https://images.unsplash.com/photo-1583096114844-06ce5a5f2171?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG91Z2hudXRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
            id: 25,
            title: "Chocolate Milk",
            description:
                "Amazing whole chicken. Home grown with no chemcials. GMO. Will change your experience of chickens. This is a great buy",
            price: 3,
            image:
                "https://images.unsplash.com/photo-1559275117-d096eb5d85b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hvY29sYXRlJTIwbWlsa3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
            id: 26,
            title: "Coke",
            description:
                "Amazing whole chicken. Home grown with no chemcials. GMO. Will change your experience of chickens. This is a great buy",
            price: 1,
            image:
                "https://images.unsplash.com/photo-1594971475674-6a97f8fe8c2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29rZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
            id: 27,
            title: "Fanta",
            description:
                "Amazing whole chicken. Home grown with no chemcials. GMO. Will change your experience of chickens. This is a great buy",
            price: 1,
            image:
                "https://images.unsplash.com/photo-1624517452488-04869289c4ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFudGF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        },
        {
            id: 28,
            title: "Orange Juice",
            description:
                "Amazing whole chicken. Home grown with no chemcials. GMO. Will change your experience of chickens. This is a great buy",
            price: 2,
            image:
                "https://images.unsplash.com/photo-1613478223719-2ab802602423?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8b3JhbmdlJTIwanVpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        },
        {
            id: 29,
            title: "Pepsi",
            description:
                "Amazing whole chicken. Home grown with no chemcials. GMO. Will change your experience of chickens. This is a great buy",
            price: 1,
            image:
                "https://images.unsplash.com/photo-1546695259-ad30ff3fd643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVwc2l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        },
        {
            id: 30,
            title: "Iced Tea",
            description:
                "Amazing whole chicken. Home grown with no chemcials. GMO. Will change your experience of chickens. This is a great buy",
            price: 150000,
            image:
                "https://images.unsplash.com/photo-1499961024600-ad094db305cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aWNlZCUyMHRlYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        },

    ],
    cart: [],
    currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            // Great Item data from products array
            const item = state.products.find(
                (product) => product.id === action.payload.id
            );
            // Check if Item is in cart already
            const inCart = state.cart.find((item) =>
                item.id === action.payload.id ? true : false
            );

            return {
                ...state,
                cart: inCart
                    ? state.cart.map((item) =>
                        item.id === action.payload.id
                            ? { ...item, qty: item.qty + 1 }
                            : item
                    )
                    : [...state.cart, { ...item, qty: 1 }],
            };
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload.id),
            };
        case actionTypes.ADJUST_ITEM_QTY:
            return {
                ...state,
                cart: state.cart.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, qty: +action.payload.qty }
                        : item
                ),
            };
        case actionTypes.LOAD_CURRENT_ITEM:
            return {
                ...state,
                currentItem: action.payload,
            };
        default:
            return state;
    }
};

export default shopReducer;
