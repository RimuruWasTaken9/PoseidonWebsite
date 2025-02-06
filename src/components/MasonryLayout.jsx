import { Masonry } from "@mui/lab";
import { homePhotos } from "../assets/bakeryPhotos";
import { useEffect } from "react";


function MasonryLayout() {
    const images = [
        homePhotos.festivalPhoto,
        homePhotos.filoPhoto,
        homePhotos.newspaperPhoto,
      ];
      
      const preloadImages = (imageArray) => {
        imageArray.forEach((src) => {
          const img = new Image();
          img.src = src;
        });
      };
    useEffect(() => {
        preloadImages(images);
      }, []);
    return (
        <Masonry
            columns={{ xs: 1, sm: 2, md: 3 }}
            spacing={3}
        >

            <div >
                <div className="card">
                    <img src={homePhotos.festivalPhoto} className="card-img-top" alt="picture of Poseidon booth at festival" />
                    <div className="card-body">
                        <h5 className="card-title">The 9th Avenue International Food Festival</h5>
                        <p className="card-text">Every year on the weekend after Mother's Day, the bakery takes part in the 9th Avenue
                            Festival, our co-owner Lili Fable was one of the co-founders. For nearly a mile, the streets are
                            lined with booths full of delicious food & fun.</p>
                    </div>
                </div>
            </div>
            <div >
                <div className="card p-3">
                    <figure className="p-3 mb-0">
                        <blockquote className="blockquote">
                            <p>"A Place to find those special ingredients and the ONLY place to find hand-made phyllo."</p>
                        </blockquote>
                        <figcaption className="blockquote-footer mb-0 text-body-secondary">
                            <cite title="Source Title">CRAIG CLAIBORNES, New York Times Cookbook</cite>
                        </figcaption>
                    </figure>
                </div>
            </div>
            <div >
                <div className="card">
                    <img src={homePhotos.filoPhoto} className="card-img-top" alt="Lili Fable holding cut piece of filo"
                    />
                    <div className="card-body">
                        <h5 className="card-title">Handmade with Effort</h5>
                        <p className="card-text">Poseidon Bakery co-owner Lili Fable holds up a piece of hand-made cut filo dough.</p>
                    </div>
                </div>
            </div>
            <div >
                <div className="card text-bg-primary text-center p-3">
                    <figure className="mb-0">
                        <blockquote className="blockquote">
                            <p>"For Greek desserts I go to Poseidon."</p>
                        </blockquote>
                        <figcaption className="blockquote-footer mb-0 text-white">
                            <cite title="Source Title">Bobby Flay, Food Network</cite>
                        </figcaption>
                    </figure>
                </div>
            </div>
            <div >
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Wherever you're From or Wherever you're Going</h5>
                        <p className="card-text">Don't miss one of New York's authentic edible treasures. Call us to ship (via U.P.S.)
                            almost anywhere, so you'll never have to be without your favorite dessert or holiday bread.</p>
                    </div>
                </div>
            </div>
            <div >
                <div className="card">
                    <img src={homePhotos.newspaperPhoto} className="card-img-top" alt="newspaper clipping of bakery" />
                </div>
            </div>
            <div >
                <div className="card p-3 text-end">
                    <figure className="mb-0">
                        <blockquote className="blockquote">
                            <p>"Best Baklava and Spanakopita..."</p>
                        </blockquote>
                        <figcaption className="blockquote-footer mb-0 text-body-secondary">
                            <cite title="Source Title">ZAGATS Restaurant Guide</cite>
                        </figcaption>
                    </figure>
                </div>
            </div>
            <div>
                <div className="card p-3 text-end">
                    <figure className="mb-0">
                        <blockquote className="blockquote">
                            <p>"Their phyllo is FAMOUS!"</p>
                        </blockquote>
                        <figcaption className="blockquote-footer mb-0 text-body-secondary">
                            <cite title="Source Title">Martha Stewart</cite>
                        </figcaption>
                    </figure>
                </div>
            </div>

        </Masonry>
    );
}
export default MasonryLayout;