//Використовуючи fetch та async await зробіть 2 функції, які використовують сайт https://jsonplaceholder.typicode.com/.
//Перша функція - приймає айді посту та виводить його body.
//Друга функція - за вашим бажанням.
//Використовуйте документацію з сайту https://jsonplaceholder.typicode.com/


async function getPostBody(Id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${Id}`);
        const post = await response.json();
        console.log("This is requested post body:", post.body);
    } catch (error) {
        console.error("Error fetching post body:", error);
    }
}

async function getUserAlbums(userId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
        const albums = await response.json();
        console.log(`Albums for user with ID ${userId}:`);
        albums.forEach(album => {
            console.log(`- ${album.title}`);
        });
    } catch (error) {
        console.error("Error fetching user albums:", error);
    }
}


getPostBody(4);
getUserAlbums(2);
