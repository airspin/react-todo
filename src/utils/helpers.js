export const sortArrOfObj = (field,dir) => {
    return function (a,b) {
        if (b[field] > a[field]) {
            if(dir==='dec'){
                return 1
            } else
            if (dir==='enc'){
                return -1
            }
        }
        if (b[field] < a[field]) {
            if(dir==='dec'){
                return -1
            } else
            if (dir==='enc'){
                return 1
            }
        }
        return 0
    }
};