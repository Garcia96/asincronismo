const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('We did it')
        } else {
            reject('Opps!')
        }
    })
}

somethingWillHappen()
    .then((res) => {
        console.log(res);
    })
    .catch((e) => console.error(e))

const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve('We did it again')
            }, 2000)
        } else {
            reject('Opps!')
        }
    })
}

somethingWillHappen2()
    .then((res) => {
        console.log(res);
    })
    .catch((e) => console.error(e))


Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then((res) => console.log(res))
    .catch((e) => console.error(e))