function Make_album(artist: string, title : string , tracks? : number) {
artist: string; tracks:  Number;  title: string; 
}
{
 const album ={
    artist,
    title,
    tracks,
 

 }
};
if(track !== undefined){
    album.tracks = track;
}
return album;
// Example function
const album1 = Make_album('Artist 1 ','Album 1');
const album2 = Make_album('Artist 2 ','Album 2',12);
const album3 = Make_album('Artist 3 ','Album 3');
console.log(album1);
console.log(album2);
console.log(album3);
