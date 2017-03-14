import React from "react";

const Letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P','Q','R','S','T','U','V','W','X','Y','Z'];

const GlossaryList = [{"gkey":"<li>At least 20/50/70% improvement in the following ACR Core Set values:<ul><li>TJC (68 joint count)</li><li>SJC (66 joint count)</li></ul></li></li>"+
                                "<li>and an improvement of at least 20/50/70% in at least 3 of the following 5 assessments:</li><li>1. Patient’s Assessment of Pain (VAS)</li><li> 2. Patient’s Global Assessment of Disease Activity (VAS) </li>"+
								"<li>3. Physician’s Global Assessment of Disease Activity (VAS)  </li><li> 4. Patient’s Assessment of Physical Function as measured by the HAQ-DI </li>"+
								"<li> 5. Acute phase reactant as measured by hsCRP </li>"
						},
						{"gkey":"<li>ADA=Adalimumab</li>"},
						{"gkey":"<li>ADR=Adverse drug reaction  </li>"},
						{"gkey":"<li>AE=Adverse event </li>"},
						{"gkey":"<li>ALT=Alanine transaminase; a biomarker of liver health  </li>"},
						{"gkey":"<li>BDMARD=Biologic disease-modifying antirheumatic drug  </li>"},
						{"gkey":"<li>CDMARD=Conventional disease-modifying antirheumatic drug  </li>"},
						{"gkey":"<li>CRP=C-reactive protein  </li>"},
						{"gkey":"<li>DAS28=Disease activity score assessing 28 diarthodial joints  </li>"},
						{"gkey":"<li>Disease remission=In Olumiant clinical trials, disease remission was measured as DAS-28hsCRP score &lt;2.6 </li>"},
						{"gkey":"<li>DMARD=Disease-modifying antirheumatic drug  </li>"},
						{"gkey":"<li>ESR=Erythrocyte sedimentation rate; used to assess inflammation </li>"},
						{"gkey":"<li>FACIT-F=Functional Assessment of Chronic Illness Therapy-Fatigue </li>"},
						{"gkey":"<li>HAQ-DI=Health assessment questionnaire-disability index; used to assess functional status in adult patients with arthritis  </li>"},
						{"gkey":"<li>HSCRP=High-sensitivity C-reactive protein; used as the acute phase marker  </li>"},
						{"gkey":"<li>IFN-ɣ=Interferon gamma  </li>"},
						{"gkey":"<li>IL=Interleukin  </li>"},
						{"gkey":"<li>IR=Inadequate responder  </li>"},
						{"gkey":"<li>JAK=Janus kinase; inhibitors of JAKs include Olumiant </li>"},
						{"gkey":"<li>JSN=Joint space narrowing </li>"},
						{"gkey":"<li>Joint damage=In Olumiant clinical trials, inhibition of radiological (joint damage) progression was measured  </li>"+
						        "<li>by modified Total Sharp score (mTSS): a score based on the sum of the joint space narrowing and erosion scores; used to assess radiological disease progression  </li>"},
						{"gkey":"<li>LS mean=Least squares mean change from baseline was used in clinical trials to estimate the population mean; this calculation also adjusts for covariates  </li>"},
						{"gkey":"<li>MOA=Mechanism of action </li>"},
						{"gkey":"<li>MTSS=Modified Total Sharp score  </li>"},
						{"gkey":"<li>MTX=Methotrexate; used as a first-line cDMARD </li>"},
						{"gkey":"<li>NMSC=Non-melanoma skin cancer </li>"},
						{"gkey":"<li>NRI=Non-responder imputation </li>"},
						{"gkey":"<li>PBO=Placebo  </li>"},
						{"gkey":"<li>PI=Prescribing Information  </li>"},
						{"gkey":"<li>PRO=Patient-reported outcome </li>"},
						{"gkey":"<li>RA=Rheumatoid arthritis </li>"},
						{"gkey":"<li>SJC=Swollen joint count  </li>"},
						{"gkey":"<li>TB=Tuberculosis  </li>"},
						{"gkey":"<li>TDMARD=Targeted disease-modifying antirheumatic drug </li>"},
						{"gkey":"<li>TJC=Tender joint count  </li>"},
						{"gkey":"<li>ULN=Upper limit of normal </li>"},
						{"gkey":"<li>VAS=Visual analogue scale; used as a measure of patient’s assessment of pain </li>"},
						{"gkey":""}
                     ]

class Glossary extends React.Component {

  state = {
    selectedLetterIndex: 1,
	selectedLetter: "<li>B"
  };

  onLetterClick (index,letter) {
    this.setState({
      selectedLetterIndex: index,
	  selectedLetter: letter
    });
  }

  render () {

	  
    return (
            <div id="glossary" className="bg-grey">
                <div className="glossary-content">
                    <h2 className="content-title">Glossary</h2>

                    <ul className="alphabet-list">
                        {Letters.map((letter, key) => {
                          return <li key={key} onClick={() => {return this.onLetterClick(key,"<li>"+letter)}} className={key === this.state.selectedLetterIndex ? 'active' : ''}>{letter}</li>;
                        })}
                    </ul>
					
					<ul className="words-list">
                        {GlossaryList.map((word) => { if(word["gkey"].indexOf(this.state.selectedLetter.toString()) == 0)return <li dangerouslySetInnerHTML={{__html: word["gkey"]}}></li>;  }).filter(function (x){
							if(x!=undefined){
							return true;
						}
						})}
                    </ul>

                </div>
            </div>
    );
  }

}

export default Glossary;