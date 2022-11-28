import React from "react";

function Home() {
  return <div className="textContainer">
    <img src="https://static.wixstatic.com/media/7ee5e9_6f183bbd75e140e1af718a27f793e87e~mv2.png" alt="Monterey Pub"/>
    <h2>
      1227 Monterey Street<br/>
      Pittsburgh PA 15212
    </h2><br/>
    <p>
      The Monterey Pub presents to you a little piece of Ireland in the Rust Belt of America. We are a modernly historic pub located in the Mexican War Streets, deep in the heart of Pittsburgh's Northside.

      We are always happy to welcome our Northside neighbors, as well as other Pittsburghers (past and present) and visitors to our beloved city. We cater to all taste buds with our full bar and our chef's traditional (and not-so-traditional) creations. We will always offer a variety of classic and bartender-inspired craft cocktails, a rotating selection of draft and bottled beers and wines. Don't worry: we also have non-alcoholic options too!
      We look forward to growing our Pub Family and carrying on the traditions of this iconic neighborhood hideaway.
      Cheers! Sláinte!
    </p><br/>
    <h2>Hours of Operation</h2><br/>
    <h3>Kitchen</h3>
    <table>
        <tr>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
          <th>Saturday</th>
          <th>Sunday</th>
        </tr>
        <tr>
          <td>4PM-10PM</td>
          <td>4PM-10PM</td>
          <td>4PM-10PM</td>
          <td>4PM-10PM</td>
          <td>4PM-10PM</td>
          <td>10AM-10PM</td>
          <td>10AM-3PM</td>
        </tr>
    </table><br/>
    <h3>Bar</h3>
    <table>
        <tr>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
          <th>Saturday</th>
          <th>Sunday</th>
        </tr>
        <tr>
          <td>4PM-12AM</td>
          <td>4PM-12AM</td>
          <td>4PM-12AM</td>
          <td>4PM-12AM</td>
          <td>4PM-12AM</td>
          <td>10AM-12AM</td>
          <td>10AM-3:30PM</td>
        </tr>
    </table>
    <p>**be sure to follow us on <a href="https://www.instagram.com/themontereypub/">Instagram</a> to easily stay up to date on events and specials!**</p>
  </div>;
}

export default Home;
