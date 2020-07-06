import  { useState, useEffect } from 'react';

const useFetch = (url, route, target) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        let mounted = true;
        const fetchData = async() => {
            const requestOptions = {
                headers: {
                    'Subscription-Key': process.env.REACT_APP_KEY
                }
            };
            
            const response = await fetch(url, requestOptions);
            const result = await response.json();
            if (mounted) {
                setData(result);
            }
        }
        if (!target || target === route) {
            fetchData()
        }

        return () => {
            mounted = false;
        }
    }, [url, route, target])


    return data;
}


export default useFetch;