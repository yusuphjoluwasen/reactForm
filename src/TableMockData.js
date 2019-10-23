const createData = (firstname, lastname,birthday, age, hobby) => {
    return { firstname, lastname,birthday, age, hobby};
};

export const rows = [
    createData('Sola', 'Ibukun', '2019-11-22', "29", 'singing'),
    createData('Ginigene', 'Aromire', '2015-11-28', "15", 'dancing'),
    createData('Gift', 'Charles', '1995-11-23', "28", 'football'),
    createData('Paul', 'Elijah', '2001-11-25', "56", 'singing'),
    createData('Nnamdi', 'Phillips', '1992-11-24', "24", 'badmington'),
];