async function refreshAccessToken()
{
    const refresh=localStorage.getItem("refresh");

    const res=await fetch("http://127.0.0.1:8000/auth/login/refresh",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({refresh})
    });

    if(res.status==200)
    {
        const data=await res.json();
        localStorage.setItem("access",data.access);
        return data.access;

    }
    else
    {
        logout();
    }
        
}

function logout()
{
    localStorage.clear();
    window.location.href="login.html"
}

async function checkAuth()
{
    // let access=localStorage.getItem("access");
    // const refresh=localStorage.getItem("refresh");
 
    // if (!access || !refresh)
    // {
    //     logout();
    // }

    // const res=await fetch("http://127.0.0.1:8000/auth/check",{
    //     headers:{
    //         "Authorization": "Bearer "+ access
    //     }
    // });

    // if(res.status==401)
    // {
    //     access= await refreshAccessToken();
        
    //     const retry=await fetch("http://127.0.0.1:8000/auth/check",{
    //     headers:{
    //         "Authorization": "Bearer "+ access
    //         }
    //     });

    //     if(retry.status==401)
    //     {
    //         logout();
    //     }
    // }
    return true;
}

async function authFetch(url, options = {}) {
    let access = localStorage.getItem("access");

    options.headers = {
        ...(options.headers || {}),
        "Authorization": "Bearer " + access,
        "Content-Type": "application/json"
    };

    let res = await fetch(url, options);

    if (res.status === 401) {
        access = await refreshAccessToken();

        options.headers["Authorization"] = "Bearer " + access;
        res = await fetch(url, options);

        if (res.status === 401) {
            logout();
        }
    }

    return res;
}

checkAuth();