import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import * as React from "react";

import Footer from "@/components/Footer/Footer";
import Language from "@/components/Language/Language";
import ProductCard from "@/components/ProductCard/ProductCard";
import SearchBar from "@/components/SearchBar/SearchBar";

import Layout from "@/layout/Layout";
import { db } from "@/util/firebase";

export default function HomePage() {
    const { t } = useTranslation("common");
    const colRef = collection(db, "products");
    getDocs(colRef).then((snapshot) => {
        let products = [];
        snapshot.docs.forEach((doc) =>
            products.push({ ...doc.data(), id: doc.id })
        );
    });
    return (
        <Layout>
            <p>{t("test")}</p>
            <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
                <Link href='/' locale='en'>
                    English
                </Link>
                <Link href='/' locale='ar'>
                    العربية
                </Link>
            </div>
            <Language />
            <SearchBar />
            <ProductCard />
            <Link href='/Listings'>go to listings</Link>
            <Link href='/splashpage'>go to splashpage</Link>
            <p>
                {" "}
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
                aliquid id, ut neque at eveniet! Nulla laborum sit cum,
                molestiae ratione, deserunt obcaecati a consectetur earum
                sapiente aperiam? Praesentium autem accusamus esse sequi
                deleniti incidunt quo ea sed nam atque cumque tempora tenetur
                doloribus perferendis, delectus, voluptatem iusto error
                repellat, consequatur inventore maiores illum veritatis
                doloremque velit! Debitis reprehenderit dolor vero accusamus cum
                voluptatum laudantium non dolorum at reiciendis eum voluptas
                architecto ipsam, quisquam eveniet culpa obcaecati quam
                repellat? Excepturi vero quidem hic aut, delectus repellendus,
                id dolorum quis omnis ipsum quas, aliquid voluptate ratione
                natus obcaecati vel ullam? Esse deserunt ab quidem fugiat
                recusandae sint, sit, neque repellat ducimus, eaque veniam at
                qui? Odit facilis, perspiciatis in quos nihil accusamus dolorum
                maiores tempora quod a cum blanditiis nesciunt beatae expedita!
                Quisquam, ipsam ab aspernatur ex laudantium, sint perspiciatis
                voluptatem repudiandae aliquam a, blanditiis tempora
                consequuntur temporibus exercitationem id reprehenderit vitae.
                Accusantium itaque architecto sint exercitationem!
                Necessitatibus quod recusandae excepturi dolorum ipsa doloribus
                pariatur exercitationem aliquam rem! Iure nemo, quas saepe
                officiis nihil culpa eos tempore soluta in molestiae deleniti
                beatae, illum ad veritatis maxime tempora similique ipsum
                consectetur, reiciendis minima distinctio. Incidunt omnis at
                amet perferendis nemo? Quibusdam quae debitis unde sed tempora
                quas illo nisi, exercitationem, nulla, dignissimos amet nostrum
                iste placeat quaerat numquam reiciendis vitae quia ipsa
                voluptates! Tenetur vel aliquid consequuntur accusantium quis
                facere hic a, iusto earum dignissimos odio non dolorem molestiae
                praesentium porro, at ut, minus ullam minima voluptas
                blanditiis. Laboriosam, laborum! Doloremque amet similique unde
                adipisci quisquam aspernatur autem, voluptates, debitis
                obcaecati officia explicabo quod harum, ducimus quos perferendis
                voluptate sunt iste exercitationem omnis provident fugit dolorem
                labore cumque. Ratione sed esse, aut officia enim tenetur quod
                perspiciatis omnis reiciendis sit odio? Modi aliquid quia sint
                beatae eaque reprehenderit? Odio dolore exercitationem quibusdam
                pariatur laborum, quod nostrum vitae molestias eos ea dicta a
                corrupti ipsa! Voluptas, quo modi? Sunt exercitationem vel non
                consequuntur magni eaque impedit nisi unde numquam, corrupti,
                eos eligendi iusto quod qui perferendis labore aspernatur
                blanditiis in minima error minus? Harum debitis explicabo soluta
                recusandae saepe rem ducimus est, voluptate quaerat! In,
                corporis eos? Harum fugiat optio inventore officiis obcaecati,
                expedita nulla illum delectus! Ad ipsum alias quos dolores illo
                ducimus libero, soluta similique quis! Cumque autem laborum quam
                saepe hic, asperiores nemo! Possimus, reprehenderit ipsum.
                Pariatur earum possimus et, expedita perferendis nulla.
                Delectus, dicta velit temporibus ipsam totam in atque
                necessitatibus assumenda laudantium sed, repellat quasi
                praesentium accusamus id magnam voluptates libero.
                Exercitationem tempora culpa mollitia ut placeat distinctio
                tenetur ad natus, eligendi quasi quam? Nisi, accusamus. Quod
                illum hic ex doloribus corrupti labore, maiores minus nesciunt
                cupiditate, maxime rerum. Quo ea obcaecati commodi rerum quia
                nam accusamus, qui laborum dicta minus, culpa quod
                exercitationem odio voluptas nihil. Obcaecati aliquam magni ipsa
                aliquid, earum laudantium magnam saepe accusamus voluptatem
                libero in officia delectus fugit, non iure vero eligendi ratione
                illo sunt corporis? Sint repellendus eius fuga cumque nisi
                dolorum tenetur debitis, eum sed quos, nam labore vero soluta?
                Dolores accusantium ut quod at. Commodi pariatur sit neque,
                consequuntur saepe eveniet ipsa eos quaerat quidem sunt cum,
                ipsum fugit aut consectetur. Tempora nihil quibusdam vel quae
                nulla fuga enim adipisci ad dolorem amet totam ducimus, nobis
                maiores nam sed cupiditate ullam debitis dicta quod ex corrupti?
                Aspernatur, voluptas dignissimos, perspiciatis animi nesciunt
                totam qui eaque, omnis id similique officiis eum? Maxime tenetur
                magni ipsum iure est atque, debitis sequi quaerat mollitia
                praesentium illo! Accusantium delectus nulla ullam velit nam
                aperiam eius magni adipisci eligendi tempora illo reiciendis
                facere, quas natus voluptates architecto at optio deserunt
                incidunt! Voluptatum, est? Quos, et sit distinctio hic excepturi
                esse, repudiandae dolorum, nihil minima quia perferendis
                consectetur temporibus blanditiis nostrum ut ea qui eveniet
                natus. Quasi hic expedita accusamus qui, impedit esse doloremque
                architecto voluptatum porro aut! Inventore at provident, nulla
                recusandae delectus unde neque dolorem iusto officiis blanditiis
                sit fugit voluptatem praesentium, earum temporibus. Accusantium
                possimus architecto consequuntur corporis ipsa placeat neque qui
                quam? Unde odit inventore temporibus ratione itaque nobis vel
                eos, voluptatem explicabo ea officiis voluptates debitis, minima
                placeat quo aspernatur amet et omnis nihil. At ipsa quidem
                ullam. Numquam odit ducimus, harum dolore blanditiis dolorum?
                Accusantium, possimus. Nisi, sed commodi laboriosam voluptates
                eum quod est illum consequuntur suscipit nobis hic eveniet
                tempora, praesentium veniam porro id quasi, non qui distinctio
                dicta debitis cumque. Quas ullam quasi, et dolores reiciendis
                deleniti ut modi, nobis eius officiis natus aut similique ipsa.
                Tempora iure magni minima magnam distinctio ratione expedita,
                exercitationem voluptates sint iusto doloremque, hic
                perspiciatis voluptatibus incidunt fugit corrupti voluptatem
                possimus quo reiciendis ipsum, praesentium vitae repellendus
                consequatur? Iusto, blanditiis repellendus obcaecati expedita
                dolore ab quidem unde possimus non, quam repellat, eaque id amet
                magnam debitis magni quasi ducimus incidunt quaerat alias nisi.
                Soluta at, nisi est iure libero obcaecati! Autem officiis,
                aperiam repudiandae obcaecati placeat iusto nostrum sapiente
                deleniti error sed, eligendi possimus odio adipisci doloremque
                odit itaque inventore temporibus quia omnis architecto numquam
                debitis porro? Illum nostrum mollitia asperiores porro quas
                veritatis magnam quaerat commodi vel dolorum, odit esse,
                incidunt voluptates quibusdam aperiam praesentium, rerum et
                maiores harum deserunt repudiandae enim explicabo id cumque?
                Rerum nesciunt, minima fuga quae doloribus, magni exercitationem
                inventore voluptas quaerat incidunt dolores. Non magnam
                consequatur voluptatem fuga! Nihil quia nemo minima laudantium,
                unde at corporis mollitia tenetur! Quo, natus id at doloremque
                itaque corporis cumque esse, in tenetur, iusto incidunt
                reiciendis eveniet iste facere optio ut praesentium ducimus
                similique cum sunt! Quidem dolor at quae inventore distinctio
                rerum vel eum explicabo tempora! Itaque totam voluptate
                necessitatibus facere blanditiis nesciunt doloribus quas velit
                laborum maiores in dignissimos, tempora aliquid voluptas
                repellendus, harum dolorem. Quisquam ullam necessitatibus
                incidunt in, quibusdam asperiores possimus perferendis.
                Quibusdam, delectus odio necessitatibus quasi esse doloremque.
                Tempore, optio nemo. Laudantium quia quos, ipsam, fugit illo vel
                illum optio sit deleniti veniam animi ab quod, dolores facilis
                molestias vitae consequatur suscipit eos. Repellendus sint
                quaerat fugit consequatur natus culpa, ipsam ea distinctio totam
                repudiandae dignissimos debitis reiciendis ducimus sit.
                Repellat, officiis consequuntur. Quos, vero?{" "}
            </p>
            <Footer />
        </Layout>
    );
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
            // Will be passed to the page component as props
        },
    };
}
