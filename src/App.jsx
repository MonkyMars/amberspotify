import './App.css'
import Cards from './cards.jsx'

export default function App() {
  return (
    <>
    <main id='main' style={{width: "100vw", height: "100vh", backgroundColor: "#555755", left: "0", top: "0", position: "fixed", zIndex: "0", overflowY: "scroll", overflowX: "hidden", display: "flex", userSelect: "none"}}>
      <div className="cards-container">
       <Cards Title="Green Eyes :: Sienna" Color="#5182e8" Artist="Nothing But Thieves" Image="DeadClubCity(Deluxe).jpg" Lyrics1="'Cause I, I'll love you forever, you know" Lyrics2="And we're gonna beat this thing" Lyrics2Top="25px" Lyrics2TopPhone="40px" audio="./greeneyessiena.mp3"/>

      <Cards Title="Holy Spirit" Color="#cd6d5f" Artist="Stormzy" Image="ThisIsWhatIMean.jpg" Lyrics1="You make me feel so hopeful" Lyrics2="I'm just glad I know you" Lyrics2Top="0px" Lyrics2TopPhone="40px" audio="./holyspirit.mp3"/>

      <Cards Title="Impossible" Color="#008671" Artist="Nothing But Thieves" Image="Impossible(Piano).jpg" Lyrics1="I could drown myself in someone like you" Lyrics2="I could dive so deep I never come out" Lyrics2Top="25px" Lyrics2TopPhone="40px"  audio="./impossible(piano).mp3"/>

      <Cards Title="I Was Just a Kid" Color="#767676" Artist="Nothing But Thieves" Image="Brokenmachine.jpg" Lyrics1="And you gave me something" Lyrics2="Gave my life a meaning" Lyrics2TopPhone="40px" audio="./iwasjustakid.mp3"/>

      <Cards Title="Love Like This" Color="#517c85" Artist="Kodaline" Image="LoveLikeThis.jpg" Lyrics1="Love like this will last forever" Lyrics2="I know now a love like this will last forever" audio="./lovelikethis.mp3"/>
      <Cards Title="Novacandy" Color="#2c8094" Artist="Post Malone" Image="Austin.jpg" Lyrics1="No, I never felt anything better than this" Lyrics2="You can tell by the look on my face" Lyrics2Top="25px" Lyrics2TopPhone="40px" audio="./novacandy.mp3"/>

        <Cards Title="I Wanna Be Yours" Color="#757575" Artist="Arctic Monkeys" Image="AM.jpg" Lyrics1="Maybe I just wanna be yours" Lyrics2="Wanna be yours" Lyrics2Top="" Lyrics2TopPhone="40px" audio="./iwannabeyours.mp3"/>
        <Cards Title="Formidable" Color="#517e83" Artist="Twenty One Pilots" Image="ScaledAndIcy.jpg" Lyrics1="But could you take me everywhere you've ever been?" Lyrics2="" Lyrics2Top="25px" audio="./formidable.mp3"/>

        <Cards Title="Better" Color="#8a66a4" Artist="Khalid" Image="better.jpg" Lyrics1="I love to see you shine in the night" Lyrics2="Like the diamond you are" Lyrics2Top="" Lyrics2TopPhone="40px" audio="./better.mp3"/>

         <Cards Title="Biutyful" Color="#2e68ff" Artist="Coldplay" Image="biutyful.jpg" Lyrics1="It's so beautiful" Lyrics2="And you're so beautiful" Lyrics2Top="" audio="./biutyful.mp3"/>

        <Cards Title="Come Around" Color="#268660" Artist="Corella" Image="comearound.jpg" Lyrics1="You're makin' me better" Lyrics2="" Lyrics2Top="" audio="./comearound.mp3"/>

        <Cards Title="Nothing Without You" Color="#ec0049" Artist="The Weeknd" Image="starboy.jpg" Lyrics1="Without your touch" Lyrics2="I'd be nothing" Lyrics2Top="" audio="./nothingwithoutyou.mp3"/>

        <Cards Title="Lady Hear Me Tonight" Color="#d04230" Artist="Modjo" Image="ladyhearmetonight.jpg" Lyrics1="I won't get you out of my mind" Lyrics2="I feel love for the first time" Lyrics2Top="" Lyrics2TopPhone="40px" audio="./ladyhearmetonight.mp3"/>

         <Cards Title="Don't Understand" Color="#2c8094" Artist="Post Malone" Image="Austin.jpg" Lyrics1="I don't understand why you like me so much" Lyrics2="You say you got a milion reasons" Lyrics2Top="25px" Lyrics2TopPhone="40px" audio="./dontunderstand.mp3"/>

        <Cards Title="You're All I Want" Color="#757575" Artist="Cigarettes After Sex" Image="yourealliwant.jpg" Lyrics1="There is no other love, it's only yours" Lyrics2="You're all I want, all I love" Lyrics2TopPhone="40px" Lyrics2Top="25px" audio="./yourealliwant.mp3"/>

        <Cards Title="Sinds 1 Dag Of 2" Color="#e81e27" Artist="Doe Maar" Image="sinds1dagof2.jpg" Lyrics1="Ze is, ze is van mij" Lyrics2="O, ze is, ze is van mij" Lyrics2Top="" audio="./sinds1dagof2.mp3"/>

        <Cards Title="Do You Love Me Yet?" Color="#da3b31" Artist="Nothing But Thieves" Image="DeadClubCity.jpg" Lyrics1="Do you love me yet?" Lyrics2="Just tell me what I gotta do" Lyrics2Top="" audio="./doyoulovemeyet.mp3"/>

        <Cards Title="You Get Me So High" Color="#8f6e76" Artist="The Neighborhood" Image="yougetmesohigh.jpg" Lyrics1="You're my best friend, I'll love you forever" Lyrics2="You're the greatest" Lyrics2Top="25px" Lyrics2TopPhone="40px" audio="./yougetmesohigh.mp3"/>

        <Cards Title="Wet Dreamz" Color="#2478ca" Artist="J. Cole" Image="wetdreamz.jpg" Lyrics1="'Cause when I seen the thighs on her and 'em hips on her and 'em lips on her" Lyrics2="Got me daydreamin', man, what?" Lyrics2Top="60px" Lyrics2TopPhone="55px" audio="./wetdreamz.mp3"/>

        <Cards Title="Real Love Song" Color="#c85200" Artist="Nothing But Thieves" Image="moralpanic.jpg" Lyrics1="Got a thing about you" Lyrics2="And it won't go away, no" Lyrics2Top="0px" audio="./reallovesong.mp3"/>
        
        <Cards Title="Cities" Color="#217ac4" Artist="Throttle" Image="cities.jpg" Lyrics1="Let's run away together" Lyrics2="Just lead me into your world" Lyrics2Top="0px" audio="./cities.mp3"/>

        <Cards Title="Shy away" Color="#477f86" Artist="Twenty One Pilots" Image="shyaway.jpg" Lyrics1="An 'I love you'" Lyrics2="That isn't words" Lyrics2Top="0px" audio="./shyaway.mp3"/>

        <Cards Title="Lift off" Color="#746bc6" Artist="Labrinth" Image="liftoff.jpg" Lyrics1="Yeah, my heart will always be with my home" Lyrics2="'Cause home's the only place that's got my heart" Lyrics2TopPhone="40px" Lyrics2Top="25px" audio="./liftoff.mp3"/>

        <Cards Title="Saving Grace" Color="#68788a" Artist="Kodaline" Image="savinggrace.jpg" Lyrics1="I'll be by your side" Lyrics2="When you're scared and you're lonely" Lyrics2Top="0px" audio="./savinggrace.mp3"/>

        <Cards Title="Maybe This Is Love" Color="#c3543a" Artist="Chef'Speciaal" Image="maybethisislove.jpg" Lyrics1="These are the days I feel alive" Lyrics2="I feel alive 'cause I'm around ya" Lyrics2Top="0px" Lyrics2TopPhone="40px" audio="./maybethisislove.mp3"/>

        <Cards Title="Kill For Your Love" Color="#d44242" Artist="Labrinth" Image="killforyourlove.jpg" Lyrics1="The alphabet need only U and S" Lyrics2="'Cause all we'll ever need is us" Lyrics2Top="0px" Lyrics2TopPhone="40px" audio="./killforyourlove.mp3"/>

        <Cards Title="Satellite" Color="#4975c7" Artist="Khalid" Image="satellite.jpg" Lyrics1="Wish I could hold you througn computer screens" Lyrics2="But the static keeps us inbetween" Lyrics2Top="25px" Lyrics2TopPhone="40px" audio="./satellite.mp3"/>

        <Cards Title="Magic" Color="#3e7ab6" Artist="ColdPlay" Image="magic.jpg" Lyrics1="I call it magic" Lyrics2="When I'm with you" Lyrics2Top="0px" audio="./magic.mp3"/>
      </div>
      
    </main>
    </>
  )
}
