export const config = {
    BASE_URL: "https://coronacrud.azurewebsites.net",
    GET_ALL_SUPSECTS: "/api/requests",
    GET_SUSPECTS_BY_CLINIC_ID: (id: string) => `/api/requests/${id}`,
    UPDATE_SUSPECT_BY_ID: (id: string) => `/api/request/${id}`,
    UPDATE: (id: string) => `https://coronacrud.azurewebsites.net/api/request/${id}`
}
