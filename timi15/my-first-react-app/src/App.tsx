
import './App.css'
import { Card } from './components/Cards/card';
import { MusicCard } from './components/MusicCard/musicCard';

const favoriteMusic = [
  {
    title: "ESC 1997 - Iceland - Paul Oscar - Minn hinsti dans [HQ]", 
    text: "Eurovision Song Contest 1997 - Festival de Eurovisión 1997",
    image: "https://i0.wp.com/grapevine.is/wp-content/uploads/6ed6a87efb99339.jpg?fit=469%2C649&quality=99&ssl=1",
    authorName: "Páll Óskar"
  },
  {
    title: "Peter Gabriel and Kate Bush arrived on 1986’s Don’t Give Up", 
    text: "So",
    image: "https://images.squarespace-cdn.com/content/v1/593070a42994cad2710a6439/1608037932301-UQKOFI8AERLXAP9OD636/image-asset.jpeg?format=2500w",
    authorName: "Peter Gabriel"
  }
  ,
  {
    title: "Leonard Norman Cohen", 
    text: "legend",
    image: "https://cdn.britannica.com/23/192623-004-CEB960BF/Leonard-Cohen-1976.jpg?s=1500x700&q=85",
    authorName: "Leonard Cohen"
  }
  
];
const blogPost = [
  {
    title: "hallo blogg", 
    text: "sofa sofa sofa",
    image: "https://t3.ftcdn.net/jpg/01/74/95/30/360_F_174953033_NcBxYQtphEDAsm9datWc4ODiccqGo9J1.jpg",
    authorName: "myself"
  },
  {
    title: "hallo FISKUR", 
    text: "BORÐA",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5cQWKIgECnV3M_ZQG8Gk0BZn6myjK-4Et_Q&s",
    authorName: "myself"
  }
]
function App() {
  return (
    <div>
    <h2>Blogg dagsins</h2>
    {blogPost.map((blog) => (
      <Card 
      title={blog.title}
      text={blog.text}
      image={blog.image}
      authorName={blog.authorName}
      />
    ))}
    <h2>lög dagsins</h2>
    {favoriteMusic.map((artist) => (
      <MusicCard 
      title={artist.title}
      text={artist.text}
      image={artist.image}
      authorName={artist.authorName}
      />
    ))}
  </div>
  );
}
export default App;
