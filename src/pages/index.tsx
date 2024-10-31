import * as React from "react"
import type {HeadFC, PageProps} from "gatsby"


import {FaArrowUp, FaFilePdf, FaVideo} from "react-icons/fa";
import {AiFillGithub} from "react-icons/ai";
import {LuTextSelect} from "react-icons/lu";

import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

import caterpillar_results from "./videos/few_shot_results/caterpillar.mp4"
import mug_handle_results from "./videos/few_shot_results/mug_handle.mp4"
import mug_lip_results from "./videos/few_shot_results/mug_lip.mp4"
import rack_results from "./videos/few_shot_results/rack.mp4"
import screwdriver_results from "./videos/few_shot_results/screwdriver.mp4"

import caterpillar_demos from "./images/demos/caterpillar.png"
import mug_handle_demos from "./images/demos/mug_handle.png"
import mug_lip_demos from "./images/demos/mug_lip.png"
import rack_demos from "./images/demos/rack.png"
import screwdriver_demos from "./images/demos/screwdriver.png"

import teaser from "./images/demos/teaser.png"
import overview from "./images/demos/overview.png"
import datapipeline from "./images/demos/datapipeline.png"
import status from "./images/demos/status.png"
import benchmark from "./images/demos/benchmark.png"
import results from "./images/demos/results.png"
import vis1 from "./images/demos/vis1.png"
import vis2 from "./images/demos/vis2.png"
import vis3 from "./images/demos/vis3.png"
import vis4 from "./images/demos/vis4.png"
import vis5 from "./images/demos/vis5.png"
import vis6 from "./images/demos/vis6.png"
import vis7 from "./images/demos/vis7.png"
import vis8 from "./images/demos/vis8.png"
import vis9 from "./images/demos/vis9.png"
import vis10 from "./images/demos/vis10.png"
import vis11 from "./images/demos/vis11.png"



import blue_mug from "./videos/language_results/carousel/blue_mug.mp4"
import clear_mug from "./videos/language_results/carousel/clear_mug.mp4"
import measuring_beaker from "./videos/language_results/carousel/measuring_beaker.mp4"
import measuring_scoop from "./videos/language_results/carousel/measuring_scoop.mp4"
import screwdriver from "./videos/language_results/carousel/screwdriver.mp4"
import teddy_bear from "./videos/language_results/carousel/teddy_bear.mp4"
import transparent_rack from "./videos/language_results/carousel/transparent_rack.mp4"
import water_jug from "./videos/language_results/carousel/water_jug.mp4"
import wooden_rack from "./videos/language_results/carousel/wooden_rack.mp4"

import lang_results from "./videos/language_results/lang_results.mp4"
import teaser_video from "./videos/teaser.mp4"


const Title: React.FC = ({children}) => {
    // Paper title
    return (
        <h1 className="pb-1 mb-5 sm:mb-4 sm:leading-tight md:leading-tight lg:leading-tight font-bold text-center">{children}</h1>
    )
}

const Venue: React.FC = ({website, children}) => {
    return (
        <div className="flex flex-wrap justify-center text-2xl lg:text-2xl mb-6 sm:mb-5">
            <a className="no-underline" href={website} target="_blank">{children}</a>
        </div>
    )
}

const Abstract: React.FC = ({children}) => {
    return (
        <div>
            <div className="flex justify-center content-center">
                <p className="font-semibold text-2xl sm:text-3xl m-1 sm:m-2">Abstract</p>
            </div>
            <div className="flex justify-center content-center">
                <p className="text-justify font-light text-base sm:text-lg m-1 sm:m-1 max-w-[100%] sm:max-w-[620px]">{
                    children
                }</p>
            </div>
        </div>
    )
}

const Author: React.FC = ({children, website, firstAuthor, affiliations, lastAuthor}) => {
    return (
        <span className="text-center inline-block">
                <a href={website} target={"_blank"}
                   className="font-normal no-underline text-stone-600 hover:underline underline-offset-3 hover:transition-all">
                    {children}
                </a>
            {firstAuthor || affiliations ?
                <sup className={"pl-0.5"}>{firstAuthor ?
                    <span className="font-bold">*</span> : null}{affiliations ? affiliations : null}</sup>
                : null}
            {lastAuthor ? null : <>,&nbsp;</>}
            </span>
    )
}

const Affiliation: React.FC = ({children, website, number}) => {
    return (
        <span className={"text-center inline-block mr-4"}>
            <sup className={"mr-0.5"}>{number}</sup>
            <a href={website} target={"_blank"}
               className="font-light no-underline text-stone-600 hover:underline underline-offset-3 hover:transition-all">
                    {children}
                </a>
        </span>
    )
}

const ActionLink: React.FC = ({children, url, icon}) => {
    return (
        <span className={"text-center inline-block my-3.5 sm:my-2 mx-2"}>
            <a href={url} target={!url.startsWith("#") ? "_blank" : "_self"}
               className="text-xl no-underline font-normal text-[#009cff] bg-[#f9f9f9] hover:bg-[#f4f4f4] hover:transition-all px-4 py-3 rounded-xl">
                <span className="align-middle inline-flex justify-center mr-0.25">{icon}&nbsp;</span>
                <span>{children}</span>
            </a>
        </span>
    )
}

const Article: React.FC = ({children}) => {
    return (
        <div
            className="mx-auto w-full max-w-[90%] format format-md
                       md:format-base
                       lg:max-w-5xl lg:format-lg
                       format-blue dark:format-invert">
            {children}
        </div>
    )
}

const Main: React.FC = ({children}) => {
    return (
        <main className="pt-6 lg:pt-12 bg-white dark:bg-gray-900">
            {children}
        </main>
    )
}


const FewShotResult: React.FC = ({children, id, demos, demos_label, video, hidden}) => {
    // Result for Few-Shot Manipulation with Demos on left, and video on right
    return (
        // add hidden if hide is true
        <div id={id}
             className={"grasp-result flex flex-row flex-wrap justify-items-center items-center mt-6" + (hidden ? " hidden" : "")}>
            <div className="sm:basis-1/3 align-middle items-center sm:pr-5 md:pr-10 pb-4 sm:pb-0">
                <p className="text-center font-medium text-2xl !mt-0 !mb-2">{children}</p>
                <img src={demos} alt={children} className="mx-auto !my-4 max-w-[80%] sm:max-w-[100%]"/>
                <p className="text-center !mt-2 !mb-0">{demos_label}</p>
            </div>
            <div className="sm:basis-2/3">
                <video autoPlay muted playsInline loop alt={children}
                       className="rounded-lg !my-0 !sm:my-0">
                    <source src={video} type="video/mp4"/>
                </video>
            </div>
        </div>
    )
}


export const Head: HeadFC = () => <title>Distilled Feature Fields Enable Few-Shot Language-Guided Manipulation</title>

const carouselResponsive = {
    desktop: {
        breakpoint: {max: 3000, min: 1024},
        items: 3,
    },
    tablet: {
        breakpoint: {max: 1024, min: 464},
        items: 2,
    },
    mobile: {
        breakpoint: {max: 464, min: 0},
        items: 1,
    }
};


const CarouselItem: React.FC = ({children, video}) => {
    return (
        <div>
            <video autoPlay muted playsInline loop alt={video}
                   className="carousel-video px-1.5 rounded-xl">
                <source src={video} type="video/mp4"/>
            </video>
            {/*<p className="text-center">{children}</p>*/}
        </div>
    )
}

const IndexPage: React.FC<PageProps> = () => {
    return (
        <>
            <Main>
                <Article>
                    <Title>
                        <span className="font-extrabold text-transparent bg-clip-text
                            bg-gradient-to-r from-pink-500 via-indigo-600 to-emerald-400">
                            ELM:
                        </span>
                        &nbsp;
                        <span className="text-stone-800">Embodied Understanding of Driving Scenarios</span>
                    </Title>

                    <Venue website={"https://eccv.ecva.net/"}>
                        <span className="font-normal text-stone-600 hover:text-transparent hover:bg-clip-text
                        hover:bg-gradient-to-r hover:from-pink-500 hover:via-indigo-600 hover:to-emerald-400
                        hover:transition-all">ECCV 2024</span>
                    </Venue>

                    {/* Authors */}
                    <div className="flex flex-wrap justify-center text-xl lg:text-xl mb-4">
                        <Author website={"https://zhouyunsong-sjtu.github.io/"} firstAuthor={true} affiliations={"1, 2"}>Yunsong Zhou</Author>
                        <Author website={"https://github.com/DevLinyan"} firstAuthor={true} affiliations={"1"}>Linyan Huang</Author>
                        <Author website={"https://github.com/retsuh-bqw"} firstAuthor={true} affiliations={"1, 2"}>Qingwen Bu</Author>
                        <Author  affiliations={"1"}>Jia Zeng</Author>
                        <Author  affiliations={"1"}>Tianyu Li</Author><br />
                        <Author  affiliations={"3"}>Hang Qiu</Author>
                        <Author  affiliations={"2"}>Hongzi Zhu</Author>
                        <Author  affiliations={"2"}>Minyi Guo</Author>
                        <Author  affiliations={"1"}>Yu Qiao</Author>
                        <Author website={"https://lihongyang.info/"} affiliations={"1"} lastAuthor={true}>Hongyang Li</Author>
                    </div>

                    {/* Affilations */}
                    <div className="flex flex-wrap justify-center text-xl lg:text-xl mb-1">
                        <Affiliation website={"https://opendrivelab.com/"} number={"1"}>OpenDriveLab at Shanghai AI Lab</Affiliation>
                        <Affiliation number={"2"}>Shanghai Jiao Tong University</Affiliation>
                        <Affiliation number={"3"}>University of California, Riverside</Affiliation>
                    </div>
                    <div className="flex flex-wrap justify-center text-l lg:text-l">
                        <span className="text-stone-600 text-center"><sup className="mr-0.5">*</sup>Indicates equal contribution.</span>
                    </div>

                    {/* Action Links */}
                    <p className="flex flex-wrap justify-center">
                        <ActionLink url={"https://arxiv.org/pdf/2403.04593"} icon={<FaFilePdf/>}>Paper</ActionLink>
                        <ActionLink url={"https://github.com/OpenDriveLab/ELM"} icon={<AiFillGithub/>}>Code</ActionLink>
                    </p>

                    <img src={teaser} alt="teaser" />
                    <div className="flex justify-center">
                        <p className="text-justify text-xl !mt-0 !mb-2 font-medium max-w-[100%] md:max-w-[100%]">
                        ELM is an embodied language model for understanding the long-horizon driving scenarios in space and time. 
                        Compared to the vanilla vision-language model (VLM) being confined to the scene description task, we expand a wide spectrum of new tasks to fully leverage the capability of large language models in an embodiment setting.
                        ELM achieves significant improvements in various applications.
                        </p>
                    </div>

                </Article>

                {/* Abstract */}
                <div className="my-6 pt-6 pb-4 bg-gradient-to-r from-pink-100/70 via-indigo-100/70 to-emerald-100/70">
                        <div
                            className="mx-auto w-full max-w-[97.5%] lg:max-w-7xl py-2 md:py-4 px-2 md:px-4">
                            <p className="text-center text-lg md:text-xl md:max-w-[85%] mx-auto">
                            <Abstract>
                                Embodied scene understanding serves as the cornerstone for autonomous agents to perceive, interpret, and respond to open driving scenarios. Such understanding is typically founded upon Vision-Language Models (VLMs). 
                                Nevertheless, existing VLMs are restricted to the 2D domain, devoid of spatial awareness and long-horizon extrapolation proficiencies. We revisit the key aspects of autonomous driving and formulate appropriate rubrics. 
                                Hereby, we introduce the Embodied Language Model (ELM), a comprehensive framework tailored for agents' understanding of driving scenes with large spatial and temporal spans. 
                                ELM incorporates space-aware pre-training to endow the agent with robust spatial localization capabilities. 
                                Besides, the model employs time-aware token selection to accurately inquire about temporal cues. 
                                We instantiate ELM on the reformulated multi-faced benchmark, and it surpasses previous state-of-the-art approaches in all aspects.
                            </Abstract>
                            </p>
                        </div>
                    </div>

                <Article>

                    {/* model */}
                    <h2 className="font-semibold border-b-[1px] !mb-4">Methodology</h2>
                    <h3 id="language-guided" className="!mt-4">Model Overview</h3>
                    <img src={overview} alt="Description of the image" />
                    <p> <b>Systematic Pipeline of ELM.</b> It consists of Pre-training by open-world data corpus and Fine-tuning on diverse tasks. 
                        To initialize the Space-aware Pre-training, we collect extensive image-text pairs from the world, empowering ELM with spatial localization while preserving the description ability in driving scenarios. 
                        In the fine-tuning process, the inputs to ELM are videos, timestamps, and text prompts. 
                        After encoding the inputs into tokens, ELM leverages the proposed Time-aware Token Selection to gather the appropriate tokens as instructed by prompts. 
                        Finally, the tokens are sent to the language model to generate output texts.</p>

                    <h3 id="language-guided" className="!mt-4">Space-aware Pre-training</h3>
                    <img src={datapipeline} alt="Description of the image" />
                    <p> <b>Annotation workflow with human quality check in the loop. 
                        For location labeling:</b> we first select diverse templates from the GPT generated candidates.
                        Pixel-point pairs as annotated in the nuScenes are then sampled and filled into the templates to form our location pre-training data. 
                        <b>For description labeling:</b> Node 4 utilizes LLaMA-Adapter V2 to obtain diverse labels on nuScenes, Waymo, YouTube, and Ego4D with predefined prompts. 
                        Two rounds of quality check are conducted in Node 3 and 7 by inspectors to guarantee the image and caption quality.</p>
                    
                    <img src={status} alt="Description of the image" />
                    <p> <b>Statistics of pre-training data and comparison of data collection with other VLMs. </b>
                        Our pre-train data surpasses that in general vision (top) and autonomous driving (middle) in terms of quantity and diversity. 
                        Anno: the type of annotations; Des: description; Loc: localization.</p>

                    {/* results */}
                    <h2 className="font-semibold border-b-[1px] !mb-4">Experiments</h2>
                    </Article>

                    <div className="my-6 pt-6 pb-4 bg-gradient-to-r from-pink-100/70 via-indigo-100/70 to-emerald-100/70">
                    {/* <div
                        className="mx-auto w-full max-w-[97.5%] lg:max-w-7xl py-2 md:py-4 px-2 md:px-4"> */}
                        <div className="relative pb-8 mb-3">
                            <Carousel responsive={carouselResponsive} infinite={true} showDots={true}
                                      renderDotsOutside={true}>
                                <img src={vis2} alt="Description of the image" style={{ maxHeight: '800px' ,marginRight: '100px'}}/>
                                <img src={vis1} alt="Description of the image" style={{ maxHeight: '800px' ,marginRight: '100px'}}/>
                                
                                
                                <img src={vis3} alt="Description of the image" style={{ maxHeight: '800px' ,marginRight: '100px'}}/>
                                <img src={vis4} alt="Description of the image" style={{ maxHeight: '800px' ,marginRight: '100px'}}/>
                                <img src={vis5} alt="Description of the image" style={{ maxHeight: '800px' ,marginRight: '100px'}}/>
                                <img src={vis6} alt="Description of the image" style={{ maxHeight: '800px' ,marginRight: '100px'}}/>
                                <img src={vis7} alt="Description of the image" style={{ maxHeight: '800px' ,marginRight: '100px'}}/>
                                <img src={vis8} alt="Description of the image" style={{ maxHeight: '800px' ,marginRight: '100px'}}/>
                                <img src={vis9} alt="Description of the image" style={{ maxHeight: '800px' ,marginRight: '100px'}}/>
                                <img src={vis10} alt="Description of the image" style={{ maxHeight: '800px' ,marginRight: '100px'}}/>
                                <img src={vis11} alt="Description of the image" style={{ maxHeight: '800px' ,marginRight: '100px'}}/>
                            </Carousel>
                        </div>
                        <p className="text-center text-lg md:text-xl md:max-w-[85%] mx-auto">
                        <b>Visualization on the benchmark.</b> We provide results for ten tasks and E2E planning through videos and corresponding QA pairs.
                        </p>
                    {/* </div> */}
                </div>
                <Article>
                    
                    <h3 id="language-guided" className="!mt-4">Results</h3>
                    <img src={results} alt="Description of the image" />
                    <p> <b>Comparison to State-of-the-arts. </b> 
                    All methods are fine-tuned on the corresponding tasks. The main metrics (%) are marked in gray. 
                    Bold emphasizes top method; underline marks the runner-up. C: CIDEr; R: ROUGE-L; B: BLEU.</p>


                    

                

                    <h2 id="citation" className="border-b-[1px]">Citation</h2>
                    <div className="relative overflow-auto">
                        <pre className="bg-gradient-to-r from-pink-100 via-indigo-100 to-emerald-100 !my-0">
                            <code id="citation-bib" className="font-medium text-slate-800">{
                                `@article{zhou2024embodied,
    title={Embodied Understanding of Driving Scenarios},
    author={Zhou, Yunsong and Huang, Linyan and Bu, Qingwen and Zeng, Jia and Li, Tianyu and Qiu, Hang and Zhu, Hongzi and Guo, Minyi and Qiao, Yu and Li, Hongyang},
    journal={arXiv preprint arXiv:2403.04593},
    year={2024}
}`}
                            </code>
                        </pre>
                        <div className="absolute top-0 right-0">
                            <button className="float-right text-2xl text-indigo-500 bg-white hover:bg-slate-50
                            hover:text-indigo-600 hover:transition-all rounded-full p-2 m-3 invisible md:visible"
                                    onClick={() => {
                                        // Select all text in the code block
                                        let bib = document.getElementById("citation-bib");
                                        let range = document.createRange();
                                        let selection = window.getSelection();

                                        // Check not null
                                        if (bib == null || range == null || selection == null) {
                                            return;
                                        }
                                        range.selectNode(bib);
                                        selection.removeAllRanges();
                                        selection.addRange(range);
                                    }}>
                                <LuTextSelect/>
                            </button>
                        </div>
                    </div>
                </Article>

                <footer className={"flex flex-col justify-center bg-gray-50 mt-8 py-8"}>
                    {/*click to go back to top*/}
                    <div className="flex justify-center align-middle text-lg">
                        <a role="button" className="text-blue-500" onClick={() => {
                            window.scrollTo({top: 0, behavior: 'smooth'});
                        }}>
                                <span
                                    className="align-text-top inline-flex justify-center mr-0.25"><FaArrowUp/>&nbsp;</span>
                            <span>Back to Top</span>
                        </a>
                    </div>
                </footer>
            </Main>
        </>
    )
}

export default IndexPage
