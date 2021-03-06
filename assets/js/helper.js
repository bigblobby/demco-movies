/**
 *
 * @param {Array} array
 * @returns {*}
 */
export function shuffle(array: Array)
{
    return array.sort(() => Math.random() < 0.5? -1 : 1);
}

// 'DESC' means highest number first (most popular)

/**
 *
 * @param {Array} array
 * @param {string} orderBy
 * @returns Array
 */
export function sortByPopularity(array: Array, orderBy: string = 'DESC'): Array{
    return array.sort(function (a, b) {
        if(orderBy === 'DESC') return b.vote_average - a.vote_average;
        if(orderBy === 'ASC') return a.vote_average - b.vote_average;
    });
}

export function getMovieYear(movie){
    return movie.release_date.slice(0,4);
}

/**
 * Will return true or false depending on whether the object has properties or not. If the object has properties it will return true. If there are no properties it will return false.
 * @param {Object} obj
 * @returns {boolean}
 */
export function isNotEmpty(obj: Object): boolean
{
    for(var key in obj){
        if(obj.hasOwnProperty(key)){
            return true;
        }
    }
    return false;
}

/**
 * Takes a string in this format 'YYYY-MM-DD' and returns a date format e.g. '3rd June, 2019'
 * @param {string} date
 * @returns {string}
 */
export function formatDate(date: string): string
{
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const day = getOrdinal(date.slice(8, 10));
    const month = months[parseInt(date.slice(5, 7)) - 1];
    const year = date.slice(0, 4);

    return day + ' ' + month + ', ' +  year;
}

/**
 * Appends the correct ordinal to a string works from 1-31
 * @param {string} day
 * @returns {string}
 */
function getOrdinal(day: string): string
{
    const ordinals = ['th', 'st', 'nd', 'rd'];
    const suffix = (day % 10);

    let date;

    // Append ordinal
    if(day < 4 || (day > 20 && day < 24) || day === '31'){
        date = day + ordinals[suffix];
    } else {
        date = day + 'th';
    }

    // Remove 0 from start of date
    if(/0[1-9]/.test(date)){
        return date.slice(1);
    } else {
        return date;
    }
}

/**
 * Takes a number and returns it formatted as GBP (15346 -> £15,346)
 * @param {number} number
 * @returns {string}
 */
export function formatMoney(number: number): string
{
    let money = ('' + number).split('').reverse();
    let res = money.map( (n, i) => (i % 3 || i === 0) ? n : n + ',');

    return '$' + res.reverse().join('');
}

/**
 * Truncates text
 * @param {string} string
 * @param {number} length
 * @returns {string}
 */
export function truncateString(string: string, length: number = 20): string
{
    if(string.length >= length){
        return string.slice(0, length) + '...';
    } else {
        return string;
    }

}