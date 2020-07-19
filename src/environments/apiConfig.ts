export const config = {
    BASE_URL: "https://coronacrud.azurewebsites.net",
    GET_ALL_SUPSECTS: "/api/requests",
    GET_SUSPECTS_BY_CLINIC_ID: (id: string) => `/api/requests/${id}`
}
