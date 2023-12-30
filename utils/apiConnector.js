import axios from "axios";

export const axiosInstance = axios.create({});

export const apiconnector = async (method, endpoint, bodyData, headers, params) => {
    try {
        const response = await axiosInstance({
            method: method,
            url: endpoint,
            data: bodyData || null,
            headers: headers || null,
            params: params || null,
        });

        return response.data;
    } catch (error) {
        console.error("Error making API request:", error);
        throw error; // Re-throw the error to let the caller handle it
    }
};
