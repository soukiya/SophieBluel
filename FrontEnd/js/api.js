let allWorks= []
async function getAllWorks() {
    // Récupération des données provenant du back-end pour les travaux
    const response = await fetch("http://localhost:5678/api/works");
    const works = await response.json();
    return works;
};
async function init(){
allWorks= await getAllWorks();
}

export async function login(userinfo) {

       
        let httpOptions = "";

            const headersContent = {
                "Accept": "*/*",
            };
            const headers = new Headers(headersContent);
            httpOptions = {
                method: "POST",
                headers: headers,
                body: userinfo
            };
            console.log(httpOptions);
        
        try {
            const response = await fetch("http://localhost:5678/api/works/users/login", httpOptions);
            console.log(response.status);
            
            if (response.status === 200) {
                alert('vous êtes bien connecté');
            
            } else {
                alert(response.status);
                throw new Error(response.status);
            }
        } catch (error) {
            console.error(error);
        }
        return false;
}

