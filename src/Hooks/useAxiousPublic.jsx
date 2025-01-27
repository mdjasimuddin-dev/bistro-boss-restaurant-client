import axios from 'axios';

const useAxiousPublic = () => {
    const axiosPublic = axios.create({
        baseURL : 'http://localhost:5000'
    })
    return axiosPublic
};

export default useAxiousPublic;