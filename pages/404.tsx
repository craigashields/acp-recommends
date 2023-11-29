import { ReactElement } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import NotFound from '../public/static/images/svgviewer-output.svg'
import { getTheme } from '@/lib/theme';

export default function FourZeroFour(): ReactElement {

  let theme = getTheme()
  const messaging = siteMetadata.seasonalText;


  return (
    <>
     <PageSEO title={`Page Not Found - ${siteMetadata.title}`} description={`Page Not Found - ${siteMetadata.title}`} />
      <div className="flex flex-col items-start justify-start md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6">
        <div className="space-x-2 pt-6 pb-8 md:space-y-5">

<svg
   width="87.694733mm"
   height="54.963001mm"
   viewBox="0 0 87.694733 54.963001"
   version="1.1"
   id="svg1"
   xmlns="http://www.w3.org/2000/svg"
   ><defs
     id="defs1" /><g
     id="layer1"
     transform="translate(-0.62330678,-0.49593811)"><path
     className="fill-primary-900"
       d="m 22.702887,55.369268 c -0.08699,-0.087 -0.158159,-0.4955 -0.158159,-0.90781 0,-0.78576 -0.619255,-1.05684 -0.877412,-0.3841 -0.172111,0.44852 -2.040595,0.71725 -2.496025,0.35899 -0.222673,-0.17517 -0.330729,-0.16314 -0.330729,0.0368 0,0.16334 -0.115326,0.29698 -0.25628,0.29698 -0.140953,0 -0.195066,-0.15952 -0.12025,-0.35448 0.07482,-0.19497 -0.06773,-0.52239 -0.316775,-0.72761 -0.412216,-0.33967 -0.436924,-0.30935 -0.275653,0.33827 0.193612,0.7775 -0.181751,1.20909 -0.696278,0.80058 -0.380816,-0.30235 -1.202954,-0.20482 -1.597262,0.18949 -0.155605,0.1556 -0.732612,0.28292 -1.282236,0.28292 -1.685862,0 -1.852365,-0.52642 -1.848148,-5.84314 0.0021,-2.65908 0.112891,-4.65145 0.267215,-4.80578 0.144987,-0.14499 0.648342,-0.30841 1.118567,-0.36316 0.81165,-0.0945 2.536828,-1.16872 2.950309,-1.83707 0.105692,-0.17085 0.552177,-0.45975 0.992187,-0.642 0.77948,-0.32288 1.153351,-1.32552 0.494265,-1.32552 -0.370174,0 -1.974161,1.19896 -2.827768,2.11373 l -0.619982,0.6644 0.531824,-0.92605 c 0.453769,-0.79013 0.525345,-1.35319 0.48769,-3.83645 l -0.04413,-2.91042 -0.84736,0.002 c -0.659631,10e-4 -0.880563,-0.13048 -0.997228,-0.59531 -0.247282,-0.98525 -1.981907,-0.65557 -2.306607,0.4384 -0.07019,0.23646 -0.32141,0.0175 -0.682971,-0.59532 -0.841285,-1.42587 -1.1926797,-1.25467 -0.9764787,0.47575 l 0.1805557,1.44512 -0.8728813,-0.25034 c -0.669569,-0.19203 -0.973957,-0.15887 -1.30683,0.14238 -0.640213,0.57938 -0.951437,0.48471 -1.318323,-0.40103 -0.412251,-0.99526 -0.644343,-0.99946 -1.050459,-0.019 -0.327113,0.78972 -0.921578,1.19796 -1.354668,0.93029 -0.132389,-0.0818 -0.240707,-0.68249 -0.240707,-1.33483 0,-0.84924 -0.159555,-1.352 -0.561818,-1.77033 l -0.561819,-0.58425 0.297235,0.57792 c 0.16348,0.31786 0.297236,1.19397 0.297236,1.94691 0,1.34018 -0.0144,1.36538 -0.684007,1.19732 -0.376204,-0.0944 -0.895923,-0.37522 -1.154931,-0.62399 -0.645559,-0.62006 -1.18419597,-4.33747 -0.99361195,-6.85743 0.138518,-1.83153 0.271505,-2.19071 1.68047695,-4.53879 0.841531,-1.40242 1.962729,-3.2047 2.491553,-4.00506 2.404065,-3.63851 6.4455593,-10.18191 7.3538263,-11.9062498 1.161756,-2.20559 3.203364,-5.6835 3.727584,-6.35 0.452142,-0.57486 0.590599,-0.61816 1.05755,-0.33073 0.793864,0.48866 2.251619,0.41597 4.793929,-0.23903 2.668819,-0.6876 3.250014,-0.58909 2.900558,0.49163 -0.131532,0.40677 -0.295424,4.31683 -0.364204,8.6890198 l -0.125055,7.94943 -1.015273,1.06379 c -1.636235,1.71441 -1.942036,2.25253 -1.930957,3.39793 l 0.01036,1.07067 0.386519,-0.89028 c 0.212585,-0.48965 0.386519,-1.05519 0.386519,-1.25677 0,-0.58008 0.49938,-0.42918 1.194954,0.36111 0.736534,0.83682 0.845702,0.52545 0.24086,-0.68699 -0.522615,-1.0476 -0.42092,-1.58137 0.40499,-2.12567 0.357599,-0.23567 0.562068,-0.28473 0.454376,-0.10904 -0.165668,0.27029 0.02949,1.99109 0.51139,4.5092 0.06266,0.32742 0.290253,0.59531 0.505762,0.59531 0.215509,0 0.391834,0.1786 0.391834,0.39688 0,0.52797 0.113874,0.5075 1.413399,-0.25407 l 1.110753,-0.65095 0.757685,1.19764 c 0.771571,1.21959 0.724665,1.56045 -0.239129,1.73772 -0.598973,0.11016 -0.630433,0.68468 -0.261894,4.78268 0.179566,1.9967 0.152262,2.3151 -0.198527,2.3151 -0.254569,0 -0.47107,-0.34296 -0.578714,-0.91676 -0.278325,-1.4836 -0.657211,-1.34319 -0.499477,0.1851 l 0.143782,1.39312 -0.890085,0.0328 c -1.006761,0.0371 -1.729601,0.18934 -1.951162,0.41091 -0.205863,0.20586 0.173872,10.00732 0.387711,10.00732 0.310913,0 1.322836,-2.35743 1.077112,-2.50929 -0.328382,-0.20295 0.222669,-1.44005 1.132909,-2.54336 0.770015,-0.93333 0.699459,-0.60205 -0.118142,0.55473 -0.257132,0.36381 -0.543599,0.98105 -0.636594,1.37165 -0.158941,0.66759 -0.108121,0.71519 0.847417,0.79375 l 1.016498,0.0836 0.145284,3.175 c 0.103102,2.25319 0.275943,3.42085 0.595312,4.02176 0.573137,1.07839 0.565212,1.28702 -0.07314,1.92537 -0.28793,0.28793 -0.453652,0.70431 -0.368567,0.92604 0.08503,0.22158 0.03108,0.40287 -0.119891,0.40287 -0.150969,0 -0.312535,-0.26789 -0.359037,-0.59531 -0.10267,-0.72292 -1.352388,-0.96601 -2.026175,-0.39413 -0.241792,0.20522 -0.822616,0.5246 -1.29072,0.70974 -0.468103,0.18514 -0.91912,0.55094 -1.002259,0.81288 -0.161014,0.50731 -0.768444,0.85787 -1.031193,0.59512 z m -7.831075,-2.54709 c 0,-0.14263 0.206498,-0.50683 0.458884,-0.80933 0.252387,-0.3025 0.07379,-0.2003 -0.396875,0.22711 -0.470667,0.4274 -0.851973,1.02272 -0.847345,1.32291 0.0083,0.5368 0.01483,0.53733 0.396875,0.0322 0.213654,-0.28247 0.388461,-0.63028 0.388461,-0.77291 z m 2.529118,0.50117 c 0.282474,-0.21366 0.388574,-0.39225 0.235778,-0.39688 -0.152797,-0.005 -0.420688,0.13446 -0.595313,0.30909 -0.228697,0.2287 -0.3175,0.23306 -0.3175,0.0156 0,-0.16603 0.121005,-0.37667 0.268899,-0.46807 0.302219,-0.18678 0.09837,-0.65879 -0.284514,-0.65879 -0.136932,0 -0.248968,0.35719 -0.248968,0.79375 0,0.88894 0.192581,0.97183 0.941618,0.40529 z m 2.233382,-0.17194 c 0,-0.14552 -0.119063,-0.191 -0.264584,-0.10106 -0.14552,0.0899 -0.264583,0.28258 -0.264583,0.4281 0,0.14553 0.119063,0.191 0.264583,0.10107 0.145521,-0.0899 0.264584,-0.28259 0.264584,-0.42811 z m -1.295453,-1.10547 c -0.339589,-0.33959 -0.683963,-0.0771 -0.432551,0.32966 0.09739,0.15758 0.298278,0.21159 0.446423,0.12004 0.180711,-0.11169 0.176146,-0.25968 -0.01387,-0.4497 z m 6.418216,-0.0539 c -0.161024,-0.41963 -0.624847,-0.55056 -0.624847,-0.17639 0,0.2798 0.289213,0.57326 0.56496,0.57326 0.1167,0 0.14365,-0.17859 0.05989,-0.39687 z m -1.960246,-4.08657 c 0.01321,-0.40454 -1.259224,-1.86656 -1.624519,-1.86656 -0.35958,0 -0.223578,1.68634 0.17887,2.21788 0.326738,0.43154 0.325863,0.59721 -0.0065,1.24001 -0.211016,0.40806 -0.305765,0.94493 -0.210553,1.19305 0.13149,0.34265 0.350691,0.10813 0.911687,-0.97543 0.406216,-0.7846 0.744192,-1.59863 0.751057,-1.80895 z m -5.279184,2.36677 c 0,-0.14552 -0.112036,-0.26458 -0.248968,-0.26458 -0.136933,0 -0.322553,0.11906 -0.41249,0.26458 -0.08994,0.14553 0.0221,0.26459 0.248968,0.26459 0.22687,0 0.41249,-0.11906 0.41249,-0.26459 z m 8.991556,-1.3309 c -0.166749,-0.31158 -0.373087,-0.49659 -0.45853,-0.41115 -0.08544,0.0854 0.0098,0.46394 0.211646,0.84109 0.201849,0.37716 0.408188,0.56218 0.458531,0.41115 0.05034,-0.15103 -0.0449,-0.52952 -0.211647,-0.84109 z m -1.472571,-1.21094 c 0.242689,-0.0931 0.411469,-0.45439 0.401744,-0.8599 l -0.01677,-0.6993 -0.260992,0.65399 c -0.143546,0.3597 -0.40389,0.74483 -0.578542,0.85585 -0.38298,0.24344 -0.124397,0.27152 0.454561,0.0494 z m -1.115278,-3.98596 c -0.03196,-1.69939 -0.126905,-3.15826 -0.210979,-3.24193 -0.286142,-0.28479 -1.194607,1.11246 -1.00461,1.54511 0.101302,0.23068 0.23743,0.79635 0.302507,1.25706 0.09872,0.69889 0.0016,0.89878 -0.586223,1.20679 l -0.704545,0.36914 0.568051,0.6453 c 0.432925,0.49179 0.53111,0.52947 0.412755,0.1584 -0.202583,-0.63516 0.02726,-0.98384 0.523105,-0.79357 0.304241,0.11675 0.325274,0.23584 0.09142,0.51761 -0.167053,0.20129 -0.225434,0.36598 -0.129735,0.36598 0.0957,0 0.05117,0.2295 -0.09895,0.51 -0.150119,0.2805 -0.197558,0.70645 -0.105421,0.94656 0.152436,0.39724 0.205043,0.39903 0.58413,0.0199 0.338912,-0.33892 0.405769,-0.99284 0.35849,-3.5064 z m -6.271415,1.50072 c 0.08994,-0.14552 0.03743,-0.26458 -0.116677,-0.26458 -0.154109,0 -0.280198,0.11906 -0.280198,0.26458 0,0.14552 0.0525,0.26458 0.116676,0.26458 0.06417,0 0.190262,-0.11906 0.280199,-0.26458 z m 3.124462,-6.77763 c 0.135489,-0.89005 -0.184581,-1.68326 -0.530389,-1.31442 -0.117053,0.12485 -0.06996,0.27816 0.104654,0.3407 0.225816,0.0809 0.244913,0.30455 0.06615,0.77475 -0.138233,0.36358 -0.251332,0.85571 -0.251332,1.09362 0,0.70848 0.472131,0.0171 0.610921,-0.89465 z m 1.353573,-0.51808 c -0.226604,-0.86231 -0.48412,-2.40127 -0.572257,-3.41991 -0.138043,-1.59542 -0.191024,-1.74209 -0.382311,-1.05834 -0.410858,1.46861 -0.305661,2.50025 0.44513,4.36525 0.4108,1.02045 0.786179,1.81609 0.834177,1.76809 0.048,-0.048 -0.09813,-0.79279 -0.324739,-1.65509 z m -2.310307,-2.42269 c -0.06708,-0.25743 -0.126381,-0.11087 -0.131773,0.32569 -0.0054,0.43657 0.04949,0.64719 0.12197,0.46806 0.07247,-0.17913 0.07689,-0.53632 0.0098,-0.79375 z m 0.610397,-1.14513 c 0,-0.13693 -0.119063,-0.24897 -0.264584,-0.24897 -0.145521,0 -0.264583,0.18562 -0.264583,0.41249 0,0.22687 0.119062,0.33891 0.264583,0.24897 0.145521,-0.0899 0.264584,-0.27556 0.264584,-0.41249 z m 3.990091,-3.3033 c 0.166674,-0.73399 0.252275,-1.56743 0.190224,-1.85208 -0.06905,-0.31674 -0.234654,0.0265 -0.426819,0.88474 -0.172699,0.77125 -0.492573,1.74761 -0.710831,2.16967 -0.562094,1.08697 -0.48167,1.57927 0.129659,0.79367 0.283098,-0.3638 0.651094,-1.262 0.817767,-1.996 z m 2.360124,0.0124 c -0.340346,-1.21559 -0.793966,-1.83268 -0.793966,-1.08007 0,0.5679 0.830167,2.58629 0.995672,2.42078 0.07462,-0.0746 -0.01614,-0.67794 -0.201706,-1.34071 z m -7.143965,-0.19277 c 0,-1.3512 -0.287854,-1.13357 -0.458867,0.34692 -0.08839,0.76521 -0.03771,1.0468 0.165777,0.92103 0.161199,-0.0996 0.29309,-0.6702 0.29309,-1.26795 z m 3.129005,-0.006 c 0.191087,-0.61847 0.681359,-1.48167 1.089493,-1.91823 0.460846,-0.49295 0.805987,-1.21989 0.910743,-1.91823 0.233913,-1.55936 -0.0057,-1.40527 -0.5095,0.32757 -0.232168,0.79863 -0.56889,1.54277 -0.748271,1.65365 -0.56989,0.35225 -1.49022,1.85003 -1.49022,2.42525 0,0.91571 0.377661,0.62782 0.747755,-0.57001 z m -2.21693,-1.27937 c -0.08519,-0.13784 -0.267667,-0.18092 -0.405507,-0.0957 -0.137839,0.0852 -0.180916,0.26767 -0.09573,0.40551 0.08519,0.13784 0.267667,0.18091 0.405507,0.0957 0.137839,-0.0852 0.180916,-0.26766 0.09573,-0.4055 z m -1.982536,-0.79382 c -0.162431,-0.3035 -0.36218,-0.48497 -0.443888,-0.40326 -0.08171,0.0817 0.002,0.33002 0.186126,0.55182 0.475671,0.57315 0.604325,0.499 0.257762,-0.14856 z m -4.221206,-2.21971 c 0.218281,-0.17767 0.605235,-0.39692 0.859896,-0.48723 0.39413,-0.13977 0.458363,-0.49021 0.431717,-2.35532 -0.01722,-1.20511 -0.110071,-2.5483 -0.206341,-2.98487 l -0.175037,-0.79375 -0.659364,0.70114 c -0.666108,0.7083 -2.358265,3.39879 -3.247476,5.1634 -0.354057,0.70262 -0.400462,1.00968 -0.173764,1.14978 0.439702,0.27175 2.697438,-0.008 3.170369,-0.39315 z m 3.091157,-0.98223 c -0.08446,-0.21107 -0.147156,-0.14838 -0.159852,0.15985 -0.01149,0.27891 0.05105,0.43518 0.138964,0.34726 0.08792,-0.0879 0.09732,-0.31612 0.02089,-0.50711 z m 2.030574,-2.68656 c 0.300106,-0.63243 0.373512,-1.27261 0.257877,-2.24896 -0.08891,-0.75068 -0.247591,-1.36488 -0.352631,-1.36488 -0.10504,0 -0.265293,0.68461 -0.356118,1.52136 -0.09082,0.83674 -0.240304,1.84877 -0.332176,2.24896 -0.233971,1.01915 0.273273,0.91779 0.783048,-0.15648 z m 2.418894,-3.08467 c -0.344502,-0.66619 -0.926042,-1.0894 -0.926042,-0.67391 0,0.44669 0.678467,1.46766 0.975306,1.46766 0.294264,0 0.285134,-0.14709 -0.04926,-0.79375 z m 49.815154,35.00622 c -0.55428,-0.61248 -0.88041,-2.51413 -0.53654,-3.1286 0.17879,-0.31948 0.13737,-0.69853 -0.13627,-1.24706 -0.32894,-0.65937 -0.33869,-0.95304 -0.0597,-1.7983 0.18439,-0.55872 0.27573,-1.61055 0.20435,-2.35339 -0.14128,-1.47032 0.0123,-1.71939 1.24992,-2.02698 0.43575,-0.1083 1.38758,-0.62765 2.11519,-1.1541 0.7276,-0.52646 1.65773,-1.16939 2.06695,-1.42873 0.7204,-0.45656 0.83878,-0.96854 0.26795,-1.15881 -0.15283,-0.051 -0.90934,0.40652 -1.68113,1.0166 -0.88478,0.69937 -1.31582,0.923 -1.1666,0.60525 0.13017,-0.27719 0.27595,-1.82574 0.32396,-3.44122 l 0.0873,-2.93725 -1.47698,-0.74728 c -1.13185,-0.57266 -1.54966,-0.67459 -1.78806,-0.43619 -0.41819,0.41819 -1.28382,0.37909 -1.89788,-0.0857 -0.70913,-0.53677 -0.96927,-0.25739 -0.63995,0.68729 0.34651,0.994 0.11739,1.25144 -1.19226,1.33964 -0.55563,0.0374 -1.06873,0.16268 -1.14022,0.27835 -0.0715,0.11567 -0.5365,-0.0998 -1.03335,-0.47872 l -0.90336,-0.68903 -0.31346,0.68797 c -0.32169,0.70603 -1.01908,0.94878 -1.02633,0.35725 -0.003,-0.22116 -0.0904,-0.19925 -0.26458,0.0661 -0.23159,0.35278 -0.28948,0.35278 -0.52107,0 -0.14329,-0.21828 -0.26235,-0.26197 -0.26458,-0.0971 -0.002,0.16999 -0.37633,0.28109 -0.86395,0.25662 -1.33114,-0.0668 -1.61501,-0.93703 -1.73502,-5.31889 l -0.10144,-3.70417 1.70632,-2.77812 c 0.93847,-1.52797 2.34883,-3.76039 3.13412,-4.96093 2.62754,-4.01695 6.48151,-10.4125998 8.68522,-14.4130998 1.68281,-3.05488 2.13178,-3.54223 2.88963,-3.13664 0.78937,0.42246 2.30708,0.3386 4.51943,-0.24973 3.06364,-0.8147 3.93449,-0.62891 3.09042,0.6593 -0.35031,0.53465 -0.41592,1.87806 -0.43424,8.8914298 l -0.0216,8.26163 -0.64857,0.51016 c -0.72107,0.5672 -1.29697,1.49307 -1.06993,1.72012 0.25717,0.25716 0.95387,-0.50114 0.95387,-1.03821 0,-0.35144 0.14777,-0.4858 0.46302,-0.42103 0.26645,0.0548 0.43002,0.28764 0.38528,0.54857 -0.0428,0.24938 0.0168,0.45404 0.13229,0.4548 0.11552,7.5e-4 0.23897,0.50245 0.27433,1.11487 0.0354,0.61243 0.19341,1.50478 0.35124,1.98301 0.32144,0.97397 0.96671,1.11933 2.09801,0.47262 1.08777,-0.62182 1.53554,-0.47764 2.12894,0.68553 0.5313,1.04142 0.53401,1.09619 0.0715,1.44679 -0.26437,0.20042 -0.62951,0.36818 -0.81141,0.37281 -0.44545,0.0113 -0.41763,1.11911 0.0897,3.57236 0.43171,2.08753 0.33569,3.43318 -0.23177,3.24816 -0.17653,-0.0575 -0.43022,-0.66132 -0.56375,-1.34171 -0.13353,-0.68038 -0.31212,-1.23733 -0.39688,-1.23766 -0.0848,-3.3e-4 -0.11981,0.86288 -0.0779,1.91823 0.0513,1.29269 -0.007,1.79491 -0.1782,1.53907 -0.21602,-0.32247 -0.41306,-0.32739 -1.30618,-0.0326 -1.49939,0.49484 -1.80687,1.20099 -1.42033,3.26188 0.61537,3.28094 0.69835,4.39779 0.43209,5.81561 -0.116,0.61767 -0.0849,0.99219 0.0824,0.99219 0.48571,0 1.12339,-1.28569 1.12339,-2.26495 0,-0.52836 0.21875,-1.27669 0.48611,-1.66296 0.26736,-0.38626 0.56782,-0.9277 0.66768,-1.20319 0.0999,-0.27549 0.24301,-0.43946 0.31809,-0.36438 0.0751,0.0751 -0.16579,0.70507 -0.53527,1.39997 -0.73908,1.39001 -0.58431,1.97884 0.52013,1.97884 0.64726,0 0.9497,0.62912 0.67665,1.40753 -0.30133,0.85902 0.18595,4.50592 0.75589,5.65729 0.65049,1.3141 0.6995,1.93101 0.15342,1.93101 -0.25453,0 -0.39988,0.26096 -0.40525,0.72761 l -0.008,0.7276 -0.54926,-0.73639 c -0.562,-0.75348 -1.18982,-0.78509 -2.04036,-0.10272 -0.19658,0.15772 -0.55377,0.31519 -0.79375,0.34995 -0.23998,0.0348 -0.76207,0.42693 -1.1602,0.87149 -0.94192,1.05176 -1.52509,1.05733 -1.52509,0.0145 0,-0.8561 -0.28284,-1.01248 -0.76986,-0.42566 -0.35756,0.43083 -1.83596,0.70445 -2.03819,0.37723 -0.0764,-0.12363 -0.25021,-0.15601 -0.38621,-0.072 -0.13601,0.0841 -1.11005,0.26956 -2.16453,0.41224 -1.05449,0.14267 -2.33633,0.32385 -2.84854,0.40263 -0.6987,0.10746 -1.04246,0.0204 -1.37646,-0.34868 z m 4.24036,-1.33799 c -0.0104,-0.25466 0.0698,-0.67273 0.17819,-0.92904 0.14889,-0.35208 0.0978,-0.42794 -0.2088,-0.31027 -0.50874,0.19522 -0.83764,0.99878 -0.46028,1.12457 0.15475,0.0516 0.21407,0.20268 0.13181,0.33578 -0.0823,0.13309 -0.0309,0.24198 0.1142,0.24198 0.14507,0 0.25526,-0.20836 0.24488,-0.46302 z m 1.37468,0.34634 c 0,-0.0642 -0.11906,-0.19026 -0.26458,-0.28019 -0.14552,-0.0899 -0.26458,-0.0374 -0.26458,0.11667 0,0.15411 0.11906,0.2802 0.26458,0.2802 0.14552,0 0.26458,-0.0525 0.26458,-0.11668 z m -3.57452,-0.93889 c 0.4168,-0.43505 0.69883,-0.84998 0.62673,-0.92208 -0.0721,-0.0721 -0.53326,0.28385 -1.0248,0.79099 -0.49154,0.50714 -0.77357,0.92208 -0.62673,0.92208 0.14684,0 0.608,-0.35595 1.0248,-0.79099 z m 3.57452,-0.82482 c 0,-0.38037 -0.45908,-0.27137 -0.61967,0.14713 -0.0983,0.25625 -0.02,0.33461 0.23627,0.23627 0.21087,-0.0809 0.3834,-0.25345 0.3834,-0.3834 z m 5.95313,0.0283 c 0.0899,-0.14552 0.0374,-0.26459 -0.11668,-0.26459 -0.15411,0 -0.2802,0.11907 -0.2802,0.26459 0,0.14552 0.0525,0.26458 0.11668,0.26458 0.0642,0 0.19026,-0.11906 0.2802,-0.26458 z m 2.82663,-1.11566 c -0.18986,-0.18986 -0.31309,-0.20548 -0.31309,-0.0397 0,0.35316 0.3129,0.66606 0.48948,0.48948 0.0752,-0.0752 -0.004,-0.27759 -0.17639,-0.44979 z m -5.34017,-1.40884 c 0,-0.33419 0.20629,-0.96706 0.45842,-1.40638 0.44792,-0.78046 0.44383,-0.81431 -0.17841,-1.47665 -0.75233,-0.80082 -0.97035,-0.83633 -1.30426,-0.21241 -0.17408,0.32527 -0.10777,0.75608 0.22016,1.43026 0.28884,0.59383 0.3826,1.10154 0.24386,1.32046 -0.12398,0.19562 -0.22724,0.63815 -0.22947,0.98339 -0.003,0.52811 0.0589,0.57544 0.39282,0.29833 0.21828,-0.18116 0.39688,-0.60281 0.39688,-0.937 z m -4.49792,0.83301 c 0,-0.25099 -0.792,-0.37748 -0.93318,-0.14904 -0.086,0.13917 0.0888,0.25303 0.3884,0.25303 0.29963,0 0.54478,-0.0468 0.54478,-0.10399 z m 9.33708,-1.21893 c -0.0761,-0.29104 -0.24356,-0.52917 -0.37211,-0.52917 -0.27336,0 -0.31401,0.62527 -0.0573,0.88195 0.34687,0.34687 0.56545,0.16731 0.42944,-0.35278 z m -1.135,-2.42008 c 0,-0.17904 -0.23812,-0.0699 -0.52916,0.24246 -0.29105,0.3124 -0.52917,0.71449 -0.52917,0.89353 0,0.17905 0.23812,0.0699 0.52917,-0.24246 0.29104,-0.31239 0.52916,-0.71448 0.52916,-0.89353 z m -1.7583,-0.22805 c 0.28077,-0.56282 0.33062,-1.02795 0.17014,-1.5875 -0.14516,-0.50617 -0.13069,-0.79145 0.0402,-0.79145 0.16069,0 0.19585,-0.32457 0.0882,-0.81447 -0.0984,-0.44795 -0.2083,-1.07303 -0.24427,-1.38906 -0.21323,-1.87388 -0.9492,-2.28171 -1.2377,-0.68586 -0.09,0.49776 -0.17928,0.73634 -0.19844,0.53019 -0.0191,-0.20616 -0.11133,-0.29833 -0.20482,-0.20483 -0.27039,0.27038 0.4821,1.0149 0.87384,0.86458 0.19497,-0.0748 0.35449,-0.0306 0.35449,0.0982 0,0.12883 -0.13097,0.27789 -0.29105,0.33125 -0.16007,0.0534 -0.29104,0.56532 -0.29104,1.13771 0,0.57238 0.13097,1.08435 0.29104,1.1377 0.35657,0.11886 0.38962,0.84667 0.0384,0.84667 -0.13893,0 -0.33077,-0.41672 -0.42632,-0.92604 -0.0956,-0.50932 -0.27251,-0.92604 -0.39325,-0.92604 -0.48341,0 -0.47663,0.50987 0.0205,1.53873 0.2874,0.59485 0.52254,1.20635 0.52254,1.3589 0,0.55159 0.49913,0.25988 0.88753,-0.51868 z m -6.1792,-1.5852 c 0,-0.14552 -0.0525,-0.26459 -0.11667,-0.26459 -0.0642,0 -0.19027,0.11907 -0.2802,0.26459 -0.0899,0.14552 -0.0374,0.26458 0.11667,0.26458 0.15411,0 0.2802,-0.11906 0.2802,-0.26458 z m 3.13317,-6.35 c 0.4476,-0.60541 0.49502,-0.79375 0.19987,-0.79375 -0.21283,0 -0.46254,0.23812 -0.55491,0.52916 -0.0924,0.29105 -0.27899,0.52917 -0.41471,0.52917 -0.13571,0 -0.24675,0.11906 -0.24675,0.26458 0,0.49107 0.42627,0.26917 1.0165,-0.52916 z m 1.41326,-1.38024 c -0.18986,-0.18986 -0.31309,-0.20548 -0.31309,-0.0397 0,0.35316 0.31289,0.66606 0.48948,0.48948 0.0752,-0.0752 -0.004,-0.2776 -0.17639,-0.44979 z m -1.10977,-0.21273 c -0.15737,-0.29405 -0.21406,-0.65124 -0.12599,-0.79375 0.0881,-0.14251 0.0411,-0.25912 -0.10444,-0.25912 -0.14552,0 -0.31716,0.0893 -0.38142,0.19844 -0.18084,0.30712 0.29862,1.38906 0.61556,1.38906 0.19894,0 0.19785,-0.15802 -0.004,-0.53463 z m -17.02864,-1.67282 c -0.089,-0.35453 -0.34919,-0.71651 -0.57824,-0.8044 -0.33023,-0.12673 -0.37878,-0.0369 -0.23449,0.43383 0.39147,1.27707 1.12409,1.61111 0.81273,0.37057 z m 16.42377,-0.57067 c 0.0144,-0.50932 -0.081,-0.92604 -0.21214,-0.92604 -0.27223,0 -0.31629,0.81205 -0.0778,1.43357 0.22759,0.59307 0.26037,0.53568 0.28994,-0.50753 z m 1.079,0.13229 c 0.0268,-0.94373 -0.13983,-1.01782 -0.44642,-0.19844 -0.1816,0.48534 -0.004,0.92514 0.39797,0.98814 0.0142,0.002 0.036,-0.35314 0.0485,-0.7897 z m 1.91005,-2.16198 c 0,-0.17044 0.16852,-0.49786 0.37448,-0.7276 0.20597,-0.22974 0.441,-0.89396 0.52229,-1.47604 l 0.14779,-1.05834 -0.32384,0.96564 c -0.17812,0.5311 -0.53221,1.19532 -0.78687,1.47604 -0.51054,0.56278 -0.61016,1.1302 -0.19844,1.1302 0.14552,0 0.26459,-0.13945 0.26459,-0.3099 z m -0.93634,-2.29628 c -0.0477,-0.051 -0.21378,-0.0142 -0.36898,0.0818 -0.32557,0.20121 -0.36705,0.94196 -0.092,1.64288 0.14376,0.36634 0.23384,0.22629 0.36898,-0.57367 0.0983,-0.58208 0.13974,-1.10002 0.092,-1.15097 z m -3.05795,0.48951 c -0.017,-0.64427 -0.0265,-0.64083 -0.36724,0.13229 -0.19239,0.43657 -0.2869,0.89576 -0.21002,1.02044 0.21537,0.34928 0.59677,-0.41234 0.57726,-1.15273 z m 7.24901,0.0662 c -0.20501,-1.34193 -0.59002,-2.03112 -0.60085,-1.07556 -0.008,0.71628 0.40381,2.06774 0.63023,2.06774 0.0672,0 0.054,-0.44648 -0.0294,-0.99218 z m -6.42972,-1.27882 c 0,-0.23041 -0.14139,-0.3718 -0.3142,-0.31419 -0.49059,0.16353 -0.57196,0.73311 -0.10473,0.73311 0.23041,0 0.41893,-0.18851 0.41893,-0.41892 z m 3.175,-0.25815 c 0,-0.22687 -0.12101,-0.33771 -0.2689,-0.2463 -0.1479,0.0914 -0.2004,0.27702 -0.11668,0.41249 0.22681,0.36699 0.38558,0.29856 0.38558,-0.16619 z m 1.04156,-1.63803 c -0.0137,-1.24184 -0.0632,-1.40522 -0.26967,-0.88925 -0.22413,0.56019 -0.0832,2.4106 0.18359,2.4106 0.0566,0 0.0953,-0.68461 0.0861,-1.52135 z m -10.29144,-1.39444 1.04779,-0.53455 v -2.77274 c 0,-1.52502 -0.10587,-2.77275 -0.23527,-2.77275 -0.49457,0 -1.32518,1.01013 -2.71953,3.30729 -2.06454,3.40128 -2.0513,3.30729 -0.46594,3.30729 0.80746,0 1.7345,-0.20883 2.37295,-0.53454 z m 3.42904,-0.80399 c 0,-0.13693 -0.11906,-0.24897 -0.26458,-0.24897 -0.14552,0 -0.26458,0.18562 -0.26458,0.41249 0,0.22687 0.11906,0.33891 0.26458,0.24897 0.14552,-0.0899 0.26458,-0.27556 0.26458,-0.41249 z m 3.90987,-1.60297 c 0.50483,-0.79733 0.51592,-1.821 0.0197,-1.821 -0.38615,0 -0.59754,0.82835 -0.26399,1.03449 0.22014,0.13606 0.19678,0.32793 -0.0853,0.70091 -0.37858,0.50053 -0.51318,0.91043 -0.29896,0.91043 0.0585,0 0.34132,-0.37117 0.62856,-0.82483 z m 2.18517,-0.3542 c -0.17587,-0.21191 -0.24804,-0.50134 -0.16037,-0.64318 0.0877,-0.14184 0.0466,-0.32759 -0.0912,-0.41278 -0.48774,-0.30144 -0.59689,0.42367 -0.1398,0.92875 0.53701,0.59339 0.86743,0.70078 0.39141,0.12721 z m -4.38857,-0.65833 c 0.38694,-0.42756 0.43417,-0.78505 0.27962,-2.11667 -0.18388,-1.58426 -0.6969,-2.28055 -0.64442,-0.87461 0.0378,1.01348 -0.30524,2.7788 -0.61703,3.175 -0.4407,0.56001 0.46155,0.39119 0.98183,-0.18372 z m 2.44224,-2.92872 c -0.0447,-0.29302 -0.22256,-0.67402 -0.39521,-0.84667 -0.24216,-0.24216 -0.31391,-0.19296 -0.31391,0.21525 0,0.29105 0.14287,0.67205 0.3175,0.84667 0.4326,0.43261 0.48601,0.40325 0.39162,-0.21525 z M 42.17908,53.895268 c -2.387842,-0.98896 -3.838637,-2.36771 -4.894934,-4.65186 -2.301884,-4.97762 -2.613408,-5.84985 -2.089308,-5.84985 0.118081,0 0.47727,-0.24463 0.798198,-0.54362 0.521545,-0.48589 0.54089,-0.58623 0.182182,-0.94494 -0.220728,-0.22073 -0.401323,-0.5047 -0.401323,-0.63105 0,-0.12635 0.731564,-1.39776 1.625697,-2.82537 1.952915,-3.11809 2.667245,-4.64599 2.44405,-5.22762 -0.270318,-0.70444 -0.667184,-0.35993 -2.293286,1.99074 -2.122179,3.0678 -2.553246,3.96983 -2.739207,5.73193 -0.08845,0.83814 -0.194222,1.56204 -0.235047,1.60868 -0.04083,0.0466 -0.26785,-0.7665 -0.504501,-1.80698 l -0.430275,-1.89177 1.305543,-1.50701 c 1.004122,-1.15907 1.276597,-1.65842 1.180175,-2.16282 -0.08831,-0.46194 0.134277,-1.00068 0.75293,-1.82242 0.483062,-0.64163 1.32478,-1.77071 1.870483,-2.50906 0.545703,-0.73835 0.997528,-1.28447 1.004054,-1.2136 0.0065,0.0709 0.07213,0.78371 0.145775,1.58407 0.07365,0.80037 0.246904,1.8004 0.385004,2.2223 0.31099,0.95005 0.32015,1.47132 0.0175,0.99371 -0.1659,-0.26177 -0.27254,-0.16859 -0.403309,0.35243 -0.125703,0.50085 0.0035,1.03131 0.441019,1.81108 0.7354,1.31058 3.611847,4.93923 3.915337,4.93923 0.11683,0 0.10511,-0.37413 -0.026,-0.83141 -0.26924,-0.93881 -0.10823,-1.38755 0.424517,-1.18311 0.21077,0.0809 0.8458,-0.41691 1.53077,-1.19993 0.93646,-1.07052 1.2824,-1.30265 1.72971,-1.16068 0.63361,0.2011 0.66097,0.0965 0.3021,-1.15481 -0.2013,-0.70191 -0.16209,-1.05698 0.18084,-1.63751 0.24083,-0.4077 0.51521,-0.69347 0.60973,-0.63505 0.0945,0.0584 0.16198,-0.39454 0.14989,-1.00658 -0.0195,-0.98687 0.0513,-1.12314 0.62598,-1.20424 l 0.64796,-0.0914 -0.59129,-0.44601 c -0.54017,-0.40745 -0.60081,-0.71447 -0.70149,-3.55144 -0.0606,-1.70799 -0.16988,-3.20199 -0.24282,-3.32 -0.0729,-0.11801 -0.26231,-1.02657 -0.42086,-2.01903 -0.15855,-0.99245 -0.52424,-2.32246 -0.81266,-2.95557 -0.28841,-0.63312 -0.5962,-1.51018 -0.68397,-1.94904 -0.16396,-0.81981 -2.1781,-3.30156 -2.19759,-2.70779 -0.006,0.1819 -0.20402,0.33073 -0.440117,0.33073 -0.35849,0 -0.37292,-0.0679 -0.0875,-0.41181 0.280447,-0.33792 0.278477,-0.39726 -0.011,-0.33073 -0.39552,0.0909 -0.44562,-1.13214 -0.11048,-2.69705 0.18154,-0.84768 0.16055,-0.89497 -0.24806,-0.55886 -0.774695,0.63723 -1.783197,3.34524 -3.114917,8.36407 -0.27029,1.01865 -0.68702,2.37371 -0.926071,3.01125 -0.504221,1.34475 -0.583459,2.7612 -0.266372,4.76165 0.158419,0.99943 0.140882,1.37058 -0.05893,1.24709 -0.339042,-0.20954 -1.802461,1.72509 -2.983825,3.9446 -0.464733,0.87312 -1.129068,1.93082 -1.4763,2.35043 -0.347232,0.41961 -0.880512,1.25137 -1.185068,1.84835 -0.548078,1.07432 -0.556234,1.07869 -0.797938,0.42769 -0.413127,-1.11271 -1.269598,-8.44561 -1.312939,-11.24106 -0.03475,-2.24156 0.110567,-3.27246 0.951074,-6.74687 1.450128,-5.99442 1.875553,-7.34981 2.950191,-9.3991698 2.230716,-4.25404 4.135838,-6.51275 6.68542,-7.92622 3.039022,-1.68482002 4.685632,-1.26661002 8.090262,2.05476 1.85772,1.81229 2.41235,2.5541 3.19707,4.27604 0.99206,2.17695 2.11944,6.0371798 2.55414,8.7456298 0.14014,0.87312 0.45241,2.71859 0.69393,4.10104 0.52822,3.02339 0.46866,6.67392 -0.12363,7.57787 -0.39136,0.5973 -0.38106,0.62421 0.23879,0.62421 0.35629,0 0.70032,0.0525 0.76452,0.11673 0.0642,0.0642 0.0294,1.40366 -0.0773,2.97657 -0.21474,3.16592 -0.99375,6.65649 -1.93729,8.68066 -3.93224,8.43577 -4.58864,9.33837 -8.42437,11.58404 -1.36334,0.79818 -2.76365,1.63673 -3.111797,1.86344 -0.583765,0.38013 -0.741945,0.36709 -2.033037,-0.16764 z m -0.39215,-2.98936 c -0.0932,-0.0932 -0.37954,-0.0888 -0.6364,0.01 -0.39611,0.152 -0.40822,0.21555 -0.0798,0.41854 0.40561,0.25068 1.02484,-0.1197 0.71617,-0.42836 z m -5.005071,-5.32954 c -0.107403,-0.5577 -0.576972,-0.52253 -0.696636,0.0522 -0.04991,0.23971 0.09594,0.41085 0.35013,0.41085 0.27251,0 0.40228,-0.17341 0.346506,-0.46302 z m -0.346506,-9.06198 c 0.08994,-0.14552 0.03743,-0.26458 -0.116677,-0.26458 -0.154109,0 -0.280198,0.11906 -0.280198,0.26458 0,0.14552 0.0525,0.26458 0.116677,0.26458 0.06417,0 0.190261,-0.11906 0.280198,-0.26458 z m 13.565401,-2.06706 c 0.0628,-0.18848 -0.16875,-0.31419 -0.57878,-0.31419 -0.70946,0 -0.93025,0.38637 -0.35278,0.61736 0.45744,0.18298 0.80748,0.0691 0.93156,-0.30317 z m 7.22422,-1.70987 c -0.0109,-0.1055 -0.0198,-0.39593 -0.0198,-0.64539 0,-0.41791 -0.0337,-0.41991 -0.42818,-0.0254 -0.2355,0.2355 -0.34365,0.56495 -0.24034,0.73212 0.19642,0.31782 0.72273,0.27092 0.68836,-0.0613 z m -1.60734,-9.60014 c 0,-0.22687 -0.121,-0.33771 -0.2689,-0.2463 -0.14789,0.0914 -0.2004,0.27702 -0.11668,0.41249 0.22682,0.36699 0.38558,0.29856 0.38558,-0.16619 z m -3.96875,-0.22959 c 0,-0.34365 -1.35519,-1.21001 -1.89273,-1.21001 -0.33619,0 -0.26936,0.90708 0.0936,1.27 0.45263,0.45263 1.79917,0.40772 1.79917,-0.06 z m -12.976353,-3.78969 c 0.427393,-0.69123 1.188563,-1.64242 1.691489,-2.11378 0.95479,-0.89485 1.8432,-2.94568 1.50977,-3.48519 -0.25691,-0.41568 -0.71152,0.13998 -1.49102,1.82246 -0.389503,0.84071 -0.965045,1.53662 -1.640528,1.98364 -1.145248,0.75789 -1.74799,1.78052 -1.50349,2.55087 0.248106,0.78171 0.595218,0.5982 1.433779,-0.758 z m 11.050563,-0.51783 c -0.59425,-0.59425 -1.01377,-0.16586 -0.68331,0.69773 0.2304,0.60209 0.27425,0.61469 0.69051,0.19844 0.41626,-0.41626 0.4158,-0.47317 -0.007,-0.89617 z m -3.03356,-4.4276 c -0.0692,-0.36222 -0.003,-1.01014 0.14644,-1.43982 0.2222,-0.6374 0.18792,-0.85764 -0.18619,-1.19621 -0.68507,-0.61997 -1.071,-0.0826 -0.80354,1.11893 0.11906,0.53483 0.28623,1.30471 0.37148,1.71085 0.19094,0.90956 0.64692,0.72231 0.47181,-0.19375 z m -1.132,-2.78253 c 0.22429,-0.41909 0.17411,-0.57325 -0.26269,-0.80702 -0.29696,-0.15893 -0.45868,-0.42045 -0.35935,-0.58116 0.10113,-0.1636298 0.0607,-0.2181198 -0.0918,-0.1238398 -0.27175,0.1679498 -0.384797,1.4553698 -0.16084,1.8316398 0.20915,0.35139 0.59007,0.2122 0.87469,-0.31962 z m 1.8848,-0.72874 c -0.25416,-0.43672 -0.27588,-0.43073 -0.28331,0.0782 -0.009,0.61248 0.32682,1.09003 0.46819,0.66592 0.0497,-0.14913 -0.0335,-0.484 -0.18488,-0.74414 z m -0.55594,-0.5183 c 0,-0.2668398 -0.84322,-1.1453198 -1.09934,-1.1453198 -0.33094,0 -0.27112,0.64038 0.0939,1.0054198 0.34041,0.3404 1.00542,0.43294 1.00542,0.1399 z M 44.225047,8.1387882 c 0.591067,-0.41401 0.873607,-2.33369 0.368697,-2.50511 -0.328847,-0.11165 -0.732627,0.77625 -0.743487,1.63489 -0.004,0.28589 -0.290545,0.66208 -0.637625,0.83597 -0.75704,0.37928 -1.079662,0.8422 -1.083462,1.55464 -0.002,0.4582398 0.10316,0.4160898 0.787932,-0.31448 0.43491,-0.46401 1.023495,-1.00667 1.307945,-1.20591 z m -1.468005,-3.79291 c 0.27786,-0.7241 0.17512,-1.43357 -0.20759,-1.43357 -0.397652,0 -0.805792,1.18633 -0.550332,1.59967 0.23446,0.37936 0.577452,0.3042 0.757922,-0.1661 z M 27.328116,36.889218 c 0.0127,-0.30823 0.07539,-0.37092 0.159853,-0.15985 0.07643,0.19099 0.06703,0.41919 -0.02089,0.50711 -0.08792,0.0879 -0.150453,-0.0684 -0.138965,-0.34726 z m 58.319728,-0.11025 c 0.0899,-0.14552 0.21602,-0.26458 0.2802,-0.26458 0.0642,0 0.11667,0.11906 0.11667,0.26458 0,0.14553 -0.12609,0.26459 -0.2802,0.26459 -0.1541,0 -0.20661,-0.11906 -0.11667,-0.26459 z M 24.994301,20.969618 c 0.08832,-0.35835 0.02493,-0.59601 -0.159239,-0.59706 -0.168277,-9.5e-4 0.05123,-0.23829 0.487791,-0.52742 0.832245,-0.55117 1.984375,-0.71019 1.984375,-0.27389 0,0.1404 -0.26789,0.3934 -0.595312,0.56223 -0.327422,0.16882 -0.880843,0.55997 -1.229824,0.8692 l -0.634512,0.56225 z m 58.404583,0.0578 c 0,-0.22285 0.18858,-0.47754 0.41906,-0.56598 0.29083,-0.11161 0.32584,-0.21842 0.11443,-0.34908 -0.39601,-0.24475 1.10458,-0.87868 1.76069,-0.7438 0.37766,0.0776 0.23698,0.26483 -0.64053,0.85234 -0.61847,0.41407 -1.12448,0.85609 -1.12448,0.98228 0,0.12618 -0.11907,0.22942 -0.26459,0.22942 -0.14552,0 -0.26458,-0.18233 -0.26458,-0.40518 z m -38.36052,-2.92416 c 0.002,-0.42443 0.11791,-0.95029 0.25708,-1.16858 0.17232,-0.27026 0.20128,-0.0592 0.0908,0.66146 -0.20049,1.30788 -0.35324,1.53055 -0.34787,0.50712 z"
       id="path1" /></g></svg>
        </div>
        <div className="max-w-md">
          <p className="mb-4 text-xl font-bold leading-normal md:text-2xl text-primary-900">
            {messaging[theme].notFoundHeader}
          </p>
          <p className="mb-8 text-primary-500" >
          {messaging[theme].notFoundMessage}
          </p>
          <Link href="/">
            <button className="focus:shadow-outline-blue inline rounded-lg border border-transparent bg-buttons px-4 py-2 text-sm font-medium leading-5 text-buttontext shadow transition-colors duration-150 hover:bg-buttonhover focus:outline-none">
            {messaging[theme].notFoundButtonText}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}