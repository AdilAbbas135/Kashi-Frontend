import React, { useState } from "react";

const Grafting = () => {
  const [selectedArticles, setSelectedArticles] = useState([]);

  const articles = [
    {
      id: 1,
      title: "Grafting (Introduction and Why Grafting?)",
      description: "",
      image: "/Articles/T-Budding.jpg",
      content: (
        <section className="container mx-auto mt-8">
          <div>
            <h1 className=" text-xl font-bold">Introduction</h1>
            <div>
              <p>
                Grafting is a method of asexual plant propagation that joins
                plant parts from different plants together so they will heal and
                grow as one plant. This technique is used to propagate plants
                that do not root well from cuttings, to utilize superior root
                systems, or to maintain clonal production. Nursery workers and
                fruit tree producers must know how to graft. Hobbyists also can
                learn this useful technique. This publication discusses the
                basic techniques used to graft fruit trees and other plants that
                cannot be propagated by cuttings or seeds. The part of the
                vegetative wood, usually the stem or other aboveground plant
                part, from the desired variety to be propagated is called the
                scion. It consists of a shoot with several dormant buds that
                will produce the new stem and branches. The rootstock is the
                part of a plant that becomes the root system of a grafted or
                budded tree. In order to be a successful graft or bud, the
                cambium layer of cells located on both plant parts must align
                and grow together. This cambium region is between the xylem and
                phloem and is where all new plant growth occurs. Grafting
                includes budding and is usually done in winter or early spring
                with dormant scion wood. Budding is accomplished by inserting a
                mature single bud of the desired cultivar into the rootstock in
                contact with the cambium. This procedure is usually done during
                the late growing season (July, August, or early September), but
                it may be done at other times. Budding is becoming the grafting
                method of choice in fruit tree production. Budding uses
                incisions rather than major cuts, which takes much less time and
                makes it more economical. Budding also uses individual buds per
                rootstock, so more plants can be produced. The major
                disadvantage is that budding is mostly limited to active growth
                periods of the year when labor demands may be high for other
                growing operations. Grafting or budding a tree is essentially
                the same, but the procedures differ. The grafting method is
                determined by the kind of plant, time of year, plant materials
                at hand, or grafter’s preference. Peaches, plums, apples, and
                pears are commonly propagated by budding, while apples and pears
                are commonly grafted.
              </p>
            </div>
          </div>
          <div>
            <p>
              <b className="text-3xl font-bold ">Why Graft? </b>
              <b className="text-xl font-bold ">Reproduce vegetatively. </b>
              <br></br>
              Numerous selections of plants will not reproduce true from seeds
              or cannot be economically reproduced from vegetative cuttings
              (fruit varieties, flowering ornamentals, etc.).{" "}
              <b className="text-xl font-bold "> Change variety. </b>
              Established orchards of fruit trees may become obsolete as newer
              varieties are developed. Newer varieties may offer improved insect
              or disease resistance, better flavor, or higher yields. Rather
              than destroy the established root system, the older orchard may be
              top-worked using the new, improved variety. <br></br>
              <b className="text-xl font-bold "> Add pollinizer.</b> Certain
              fruit trees are not self-fertile; they require cross-pollination
              by a second fruit tree, usually of another variety. Some hollies
              are dioecious, meaning that a given plant has either male or
              female flowers but not both. To ensure good berry production on
              the female plant, a male plant must be growing nearby. Where this
              is not possible, the chances that cross-pollination will occur can
              be increased by grafting a scion from a male plant onto the female
              plant.<br></br>
              <b className="text-xl font-bold "> Change root system.</b> Certain
              rootstocks have superior growth habits, disease and insect
              resistance, and better anchorage. For example, when used as
              rootstock for commercial apple varieties, some rootstocks can
              increase resistance to crown gall and root aphids. Some are also
              used as dwarfing rootstocks.<br></br>
              <b className="text-xl font-bold ">
                Produce certain plant forms.
              </b>{" "}
              Plants with a weeping growth habit are often grafted or budded
              onto a standard rootstock. It may require staking for several
              years until the standard is large enough to support the weeping
              top. <br></br>
              <b className="text-xl font-bold "> Repair damaged plants.</b>
              Large trees or specimen plants can be damaged easily at or
              slightly above the soil line. The damage may be caused by
              maintenance equipment or by disease, rodents, storms, or
              vandalism. This repair procedure is referred to as inarching,
              approach grafting, or bridge grafting.
              <br></br>
              <b className="text-xl font-bold "> Create designs.</b>
              Advanced grafters may want to join plants to create designs such
              as hearts, chairs, or anything they can imagine.
            </p>
          </div>
        </section>
      ),
    },
    {
      id: 2,
      title: "Grafting Tools",
      description: "",
      image: "/Articles/chipbud.jpg",
      content: (
        <div>
          <div>
            <p>
              <b className="text-xl font-bold">Grafting has been practiced</b>{" "}
              for thousands of years. Concepts remain the same, but tools have
              evolved. This publication focuses on basic tools that the average
              gardener can easily obtain. There are numerous types of
              grafting/budding knives available (Figure 1). Grafting knives are
              characterized by being flat on one side of the blade. Sharpen the
              blade frequently to get clean cuts. Be sure to clean any
              sharpening oil off the blade before using it.
            </p>
            <img src="./Articles/Graft1.jpg" alt="" />
          </div>

          <div>
            <p>
              A good alternative to a grafting knife is a box cutter (Figure 1).
              The blade is thin and can be easily replaced when it becomes dull.
              The disadvantage is that, on larger diameter wood, the blade is
              too flimsy and may break. Various grafting tools have been
              developed to speed the grafting process and make more precise,
              matching cuts (Figure 2). These tools work best with scion and
              rootstocks very closely matched in size.
            </p>
            <img src="./Articles/Graft2.jpg" alt="" />
          </div>

          <div>
            <p>
              Newer methods involve using a stretchable, plastic film
              (parafilm). The film holds the scion and rootstock snuggly
              together and provides an airtight seal around the area. The film
              breaks down gradually, eliminating the need for cutting it out as
              the graft grows. The film comes in various widths.
            </p>
            <img src="./Articles/Graft3.jpg" alt="" />
          </div>
        </div>
      ),
    },

    {
      id: 2,
      title: "Using Grafting Tools",
      description: "",
      image: "/Articles/chipbud.jpg",
      content: (
        <div>
          <div>
            <p>
              Grafting tools work best on scions and rootstocks that are
              three-eighths of an inch or smaller in diameter. The pieces need
              to be equal in size to make a successful graft. Use the tool to
              make a v-shaped notch in the rootstock, then make a matching
              v-shaped cut on the scion (Figure 4). Join and wrap the pieces
              tightly with the grafting tape (Figure 5).
            </p>
            <img src="./Articles/usetool1.jpg" alt="" />
            <h5>And Follow that</h5>
            <img src="./Articles/usetool2.jpg" alt="" />
          </div>
          <div>
            <p>
              Tie the bundles of each variety together and label them. Use a
              pencil or a horticultural pen for marking wooden tags. Regardless
              of what type tag you use, make sure the name will stay on it under
              adverse conditions (Figure 6).
            </p>
            <img src="./Articles/usetool3.jpg" alt="" />
            <div>
              <p>
                To store the scion wood, place each variety in a moist (not
                saturated) medium, such as sphagnum moss, sawdust, or paper
                towels, and place in a sealable plastic bag. All bundles should
                be labeled by cultivar name and date collected. A garbage bag is
                good for large quantities of scion wood. Do not let the wood dry
                out. Store the wrapped packages of propagating wood in a
                refrigerated room at 34–38°F. Properly stored scion wood should
                remain in good condition until it is ready for use in late
                winter through early spring.
              </p>
            </div>
          </div>
          <div>
            <p>
              <b className="text-xl font-bold">
                Collecting Scion Wood for Budding:
              </b>
              <br></br>
              Collect scion wood or bud wood early in the day while temperatures
              are cool and the plants are still fully turgid. It is a good idea
              to bring a cooler with ice to the field to ensure cuttings stay
              fresh. The best vegetative buds usually come from the current
              season’s growth or dormant wood that grew the previous year.
              Mature buds are most desirable; discard terminal and younger buds.
              To keep buds from drying out, getting hot, or freezing (depending
              on the season), place the bud wood into plastic bags or wrap it in
              moist towels as you collect it. As the bud wood is selected, the
              leaves should be cut off immediately, leaving only a short piece
              of the leaf petiole attached to the bud to aid in handling. Place
              bud wood of only one variety in a labeled bag. Bud sticks that
              will not be used immediately should be bundled, labeled, and
              stored in moisture-retaining containers such as plastic bags or
              waxed cardboard boxes, which should be kept cool (32–45°F). The
              longer bud wood is stored, the less likely it is to form a union
              with the rootstock. Generally, bud wood stored for more than a few
              days should be discarded.<br></br>
              <b className="text-xl font-bold">Rootstocks</b>
              <br></br>
              Grafting and budding require a compatible rootstock onto which you
              attach your desired variety of plant. An inexpensive way to obtain
              a rootstock is to collect seeds from the type of plant you are
              propagating and grow your own. It will usually take at least 1
              year to grow a grafting-size rootstock. The seeds of all common
              tree fruits (apple, pear, peach, and persimmon) require a chilling
              period before they will germinate. This process is referred to as
              stratification. Once the seeds are collected, they need to be
              stored in a sealed container in a refrigerator. Pear and apple
              seeds should be stored 70–90 days before planting. Peach and
              persimmon seeds require 90–120 days of cold storage. Another
              method to get rootstock is to order from companies that specialize
              in production rootstocks (see Grafting Supply Resources below).
              These companies sell seedling rootstocks as well as clonal
              rootstocks. Clonal rootstocks were developed to manipulate tree
              size and will often provide resistance to soil-borne insects and
              diseases. These clonal rootstocks are preferred because they have
              well-known characteristics that seedling rootstocks do not. Clonal
              apple rootstocks recommended in Mississippi are Malling-Merton 106
              (MM 106), MM 111, and Merton 7A (M 7A). They reduce the mature
              size of an apple tree by 50–70 percent compared to a seedling
              grafted tree. Recommended clonal pear rootstock is Old Home X
              Farmingdale 333 (OH X F 333). This rootstock produces a tree that
              is 50–66 percent smaller than a seedling grafted tree. Other
              clonal rootstocks are available, but most have not been evaluated
              under Mississippi growing conditions.
            </p>
          </div>
        </div>
      ),
    },

    {
      id: 2,
      title: "Grafting Techniques",
      description: "",
      image: "/Articles/chipbud.jpg",
      content: (
        <div>
          <div>
            <p>
              <b className="text-xl font-bold">Whip & Tongue Graft</b>
              <br></br>
              Seedlings or clonal rootstocks are whip grafted in February or
              early March while still dormant. Following grafting, they are
              placed in moist sawdust, peat, or sphagnum moss and stored where
              the temperature is approximately 45–50°F. Be sure to check them
              for drying while in storage; they should be moist but not wet.
              They can also be planted directly into containers and kept in a
              protected area to prevent freezing. A last option is to plant in
              the nursery row or directly in the planting hole where the tree is
              to be located. This is usually done in April. To make the graft,
              use a sharp knife and make cuts approximately 1 inch long at the
              base of the scion and at the selected place on the rootstock
              (Figures 7 and 8). Clonal rootstock should be grafted 10–12 inches
              above the roots. Seedlings are grafted 1–2 inches above the roots.
            </p>
            <div>
              <img src="./Articles/t1.jpg" alt="" />
              <h5>Making the cut for a whip and tongue graft.</h5>
              <img src="./Articles/t2.jpg" alt="" />
              <h5>Finished whip and tongue graft cut.</h5>
              <p>
                Make a second cut one-third of the way in each piece to form the
                “tongue”
              </p>
              <img src="./Articles/t3.jpg" alt="" />
              <p>
                Then, fit the scion piece and the rootstock together so the cut
                surfaces match, preferably on both sides (Figure 10). Complete
                the whip and tongue grafting operation by tying the graft with a
                rubber band, tape, or film and painting with a tree wound
                dressing (Figure 11). The simple version of this graft
                technique, the whip graft, is also used to graft many
                vegetables.
              </p>
              <img src="./Articles/t4.jpg" alt="" />
              <h5>Tongue pieces fitted together.</h5>
              <img src="./Articles/t5.jpg" alt="" />
              <h5> Finish by wrapping with film..</h5>
            </div>
          </div>
          <div>
            <p>
              <b className="text-xl font-bold">Cleft Graft</b>
              <br></br>
              Gather and store scion wood as discussed previously. Late February
              and March—just before new growth begins—is the time to cleft
              graft. To cleft graft, cut the desired limbs off with a smooth
              cut. These limbs should be 1 inch or larger in diameter. Split the
              stock with a cleft grafting tool or hatchet, being sure not to
              split any knots. Open the split by inserting the end of the cleft
              grafting tool or a screwdriver into the center of the split
              (Figure 12).
            </p>
            <img src="./Articles/c1.jpg" alt="" />
            <h5> Initial limb removal and splitting of stock.</h5>
            <p>
              With cleft grafting, it is best to leave a nurse limb to keep the
              tree alive until the grafted scions are growing well. The nurse
              limb can be removed in midsummer or top-worked the following
              winter if the scions are growing well. Cut scions with three or
              four buds on the lower end on each side to form a wedge-shaped cut
              that is narrower on the opposite side (Figures 13 and 14).
            </p>
            <img src="./Articles/c2.jpg" alt="" />
            <h5>Outside of wedge.</h5>
            <img src="./Articles/c3.jpg" alt="" />
            <h5> The inside of the wedge is narrower.</h5>
            <p>
              Insert the scion into the cleft with the narrow side of the scion
              toward the center of the stock (Figure 15). Gently remove the
              cleft grafting tool or screwdriver so the stock will close tightly
              on the scion. Extreme care must be taken to match the cambiums of
              the scion and stock. Finish by wrapping with parafilm (Figure 16).
            </p>
            <img src="./Articles/c4.jpg" alt="" />
            <h5> Scion piece inserted into limb stock.</h5>
            <img src="./Articles/c5.jpg" alt="" />
            <h5>Finished cleft graft.</h5>
            <p>
              Six to eight weeks after the grafts begin to grow, cut the tape or
              film on two sides of the stock away from the grafts. This will
              allow the tape to eventually peel off, preventing the possibility
              of girdling. Do not remove the tape; let it peel off naturally.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 1,
      title: "Other Technique",
      description: "",
      image: "/Articles/T-Budding.jpg",
      content: (
        <div>
          <div>
            <p>
              <b className="text-xl font-bold">Bark Graft</b>
              <br></br>
              Bark grafts are used on branches or rootstocks that are more than
              2 inches in diameter. Timing for this type graft depends on the
              crop but is typically done in late spring, when the bark of the
              rootstock is easier to work with. Cut the top of the branch from
              the rootstock tree as if you were making a cleft graft, but do not
              split the stock. On each side of the stock, make a cut through the
              bark, downward, about 2 inches long (Figure 17). The bark will
              then safely peel back.
            </p>
            <img src="./Articles/c6.jpg" alt="" />
            <h5>Making the initial cut for the scion piece.</h5>
            <p>
              Make a 2- to 3-inch-long cut in the scion, slicing only halfway
              through the wood
            </p>
            <img src="./Articles/c7.jpg" alt="" />
            <h5>
              Make a smooth cut to the core on 2 to 3 inches of the scion wood.
            </h5>
            <p>
              Pull the bark from the tree and slide the sharpened part of the
              scion between the bark and wood. Drive one or two small nails
              through the bark and scion wood to hold it to the rootstock
              (Figure 19). This will keep the scion from being dislodged.
            </p>
            <img src="./Articles/c8.jpg" alt="" />
            <h5>
              One small nail at the bottom and one at the top will keep the
              scion in place.
            </h5>
            <p>
              Cover all of the exposed wood and cracks with grafting tape. You
              can add reflecting aluminum foil and a plastic bag to increase
              moisture and reflect sunlight (Figure 20).
            </p>
            <img src="./Articles/c9.jpg" alt="" />
            <p>
              <b className="text-xl font-bold">Reasons for Graft Failure</b>
              <br></br>
              Sometimes, in spite of our best efforts, the grafts do not take.
              Below are some possible reasons for graft failure:
              <li>The stock and scion were not compatible.</li>
              <li>The cambium layers did not meet properly.</li>
              <li>The scions were upside-down.</li>
              <li>The understock or scion was not healthy.</li>
              <li>The scions were dried out or injured by cold weather.</li>
              <li>The scions were not dormant.</li>
              <li>
                The graft was not properly covered with grafting wax/tape.
              </li>
              <li>The scion was displaced by storms, birds, or other means.</li>
            </p>
          </div>
        </div>
      ),
    },
  ];

  const handleArticleClick = (article) => {
    setSelectedArticles((prevSelectedArticles) => [
      ...prevSelectedArticles,
      article,
    ]);
  };

  const handleBackClick = () => {
    setSelectedArticles([]);
  };

  return (
    <section className="container mx-auto mt-8">
      {selectedArticles.length > 0 ? (
        <>
          <button
            onClick={handleBackClick}
            className="text-blue-500 font-semibold mb-4"
          >
            Back to Articles
          </button>
          {selectedArticles.map((article) => (
            <div key={article.id}>
              <h2 className="text-3xl font-bold mb-4">{article.title}</h2>
              <div>{article.content}</div>
            </div>
          ))}
        </>
      ) : (
        <>
          <h2 className="text-3xl font-bold mb-4 text-center">
            Grafting Of Plants
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-lg overflow-hidden shadow-md"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Published on {article.date} by {article.author}
                  </p>
                  <button
                    onClick={() => handleArticleClick(article)}
                    className="text-blue-500 font-semibold underline"
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default Grafting;
