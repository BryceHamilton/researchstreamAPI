const { ObjectID } = require('mongoose');

const hardCodedStudies = [
  {
    _id: ObjectID('kru'),
    title: 'Insulin and Kidney Function Study',
    date: 'July 2019',
    purpose:
      'To determine how insulin levels in the blood affect the way the kidneys eliminate phosphate into the urine in people with type 2 diabetes that have either normal or moderately reduced kidney function',
    lab: 'Queen’s-KRU (Kidney Research Unit)',
    location:
      'Kingston Health Sciences Centre – Kingston General Hospital site\n\n76 Stuart Street\nKingston, Ontario\nK7L 2V7',
    compensation: 'Compensation is $50 for 1 visit.',
    whoIsConducting:
      'Co-Principal Investigators: Dr. Rachel Holden and Dr.Christine White, Queen’s University/Kingston Health Science Centre – Kingston General Hospital site.\nCo-investigators: Aysha Draves, M.Sc. (Candidate), Queen’s University, Dr. Robyn Houlden and Dr. Jocelyn Garland, Queen’s University/Kingston Health Sciences Centre – Kingston General Hospital site, and Dr. Michael A. Adams, Biomedical and Molecular Sciences, Queen’s University.\nMain Contact: Corinne Babiolakis',
    benefits:
      'You will not benefit directly from this study; however results from this study may improve the understanding of how insulin affects phosphate excretion and may benefit people in the future.',
    inclusion: [
      'Adults aged 40 and 80 who have non-insulin dependent type 2 diabetes with or without reduced kidney function',
    ],
    exclusion: [
      'Known allergy to contrast',
      'Known allergy to shellfish',
      'Insulin use',
    ],
    expectations:
      'If you decide to take part in this study, you will be asked to visit the hospital for one visit. The test will take approximately 5 hours to complete. The visit includes:\n1. Blood samples\n2. Urine samples\n3. Consumption of an oral phosphate drink (1 cup of water\n4. that contains a total of 500 mg of phosphate)\n5. Questions regarding your medication and supplement use',
  },
  {
    _id: ObjectID('hmrl'),
    title: 'Human Mobility Lab Study',
    date: 'November 2018',
    purpose:
      'To develop a database of normal, healthy walking biomechanics data to use as a baseline comparison for studies on individuals with disabilities that impair their walking abilities',
    lab: 'Human Mobility Research Laboratory.',
    location:
      'Human Mobility Research Laboratory: Hotel Dieu Hospital, 166 Brock St. Kingston, ON.',
    compensation: 'No monetary compensation.',
    whoIsConducting: 'Investigators: Kevin Deluzio and Michael Rainbow.',
    benefits:
      'You will receive no direct benefits from participation in the study. The data collected from you may ultimately led to a better understanding of human walking from a biomechanical perspective, and may be useful in assessing other populations with impaired walking characteristics.',
    inclusion: [
      'You are between the ages of 19-65.',
      'You are healthy and recreationally active and have no neuromuscular, musculoskeletal or metabolic impairments that prevent you from engaging in most forms of casual physical activity',
    ],
    exclusion: [
      'You are currently taking medications for medications for any neurological, cardiovascular or metabolic disorders',
      'You have had an injury (in the last year) or surgery (ever) that has impaired your walking ability',
      'You have moderate to severe knee and/or ankle malalignment in one or both legs',
    ],
    expectations:
      'The testing will take approximately 1 to 1 1/2 hours in length. Your height and weight will first be measured, and you will be asked to report your age and level of physical activity (e.g. exercise habits). You will be asked to change into spandex shorts, a sleeveless shirt, and a pair of athletic shoes so that a set of small reflective markers can be secured to your arms, legs, and trunk by tape and Velcro wraps. These markers allow the researchers to measure the positions of your limbs while you walk. A set of small sensors will be taped to your leg on the surface of several major muscles. The sensors allow the researchers to record the magnitude and timing of your muscle activity while you walk. The sensors are purely a measurement device. They do not and cannot deliver any sort of stimulus or electrical “shock” to your muscles.',
  },
  {
    _id: ObjectID('depressionStudy'),
    title: 'Probiotics and Depression',
    date: 'January 2019',
    purpose:
      'Study Examining the Effects of a Probiotic Supplement on Symptoms of Depression',
    lab: 'Milev Laboratory.',
    location: 'Providence Care Hospital. Kingston, ON.',
    compensation:
      'Participants are reimbursed $50 per study visit, and $50 per MRI.',
    whoIsConducting:
      'Caroline Wallace, PhD student, and the Centre for Neuroscience Studies',
    benefits:
      'Participation in the study will help researchers understand how probiotics affect depressive symptoms.',
    inclusion: ['Adults aged 18-65 in a current episode of depression'],
    exclusion: ['You are currently not taking any antidepressent medication'],
    expectations:
      'At study appointments participants will fill out a questionaire and provide blood and urine samples. They will also undergo 2 MRIs and 3 polysomnograms.',
  },
  {
    _id: ObjectID('qmpl3'),
    title: 'Type of Cycling Exercise and Muscle Response',
    date: 'April 2019',
    purpose:
      'To investigate the effects of two types of cycling exercise on training adaptations',
    lab: "Queen's Muscle Physiology Lab",
    location: 'SKHS Building. Kingston, ON',
    compensation: 'Participants will be compensated $50 cash.',
    whoIsConducting: '',
    benefits:
      'In addition to the cash compensation, this study includes free exercise training, free fitness testing and free meals.',
    inclusion: [
      '3 hours of physical activity per week',
      'No concurrent involvement in another training program',
      'BMI < 30k/m2',
    ],
    exclusion: [
      'Presence of cardiovascular disease',
      'Presence of metabolic disease',
      'Taking regular oral medication (e.g. Adderall)',
      'Current smoker',
    ],
    expectations:
      '1. Complete 2 fitness tests before training 2. Have 1 muscle biopsy taken before training. 3. Complete 7, 30-minute sessions of supervised aerobic exercise training on a stationary bike over a 2-week period. 4. Have 1 muscle biopsy taken after training. 5. Complete 2 fitness tests after training',
  },
  {
    _id: ObjectID('limbLab'),
    title: 'KINARM Robot Study',
    date: 'March 2019',
    purpose:
      'We hope to create a better diagnostic tool for brain functions to help improve diagnosis, treatment, and therapies for patients',
    // purpose:
    //   "Your data will be used within a pool of other people to act as age-matched controls to help other researchers compare to their patient populations such as Stroke, MS, TIA, Concussion, Dialysis, Cardiac Surgery, Critically Ill to name a few. This is needed because the neurological effects of injuries, disorders, and diseases are not fully understood. They may affect motor function, strength, limb position sense, and other brain functions including how we process information as well as immediate and delayed memory. Presently, diagnosis and treatments are largely based on subjective measures that use coarse scales. We hope to create a better diagnostic tool to help improve diagnosis, treatment, and therapies for patients",
    lab: 'LIMB Laboratory using the Kinarm Robot.',
    location: 'KGH Connell 4, Kingston, ON',
    compensation:
      'Compensation is 15$/hour as well as a parking pass for the underground lot.',
    whoIsConducting: '',
    benefits: '',
    inclusion:
      'Participants must be aged 35+ We are looking for healthy individuals with no neurological disorders and no issues affecting the upper limbs. Please contact the researcher below for more information.',
    exclusion: '',
    expectations: '',
  },
  {
    _id: ObjectID('cookLab'),
    title:
      'Neuroscience Study Recruiting Healthy Women and Women with Migraine',
    date: 'February 2019',
    description:
      'The purpose of this study is to examine arterial health in the brain and other arteries in the body to determine if there are differences between women who get migranes and those who do not',
    purpose:
      'Women who experience migraines may have an increased risk of cardiovascular disease, and in some cases, an increased risk of stroke. The purpose of this study is to examine arterial health in the brain and other arteries in the body to determine if there are differences between women who get migraines and those who do not.',
    lab:
      'Cook Laboratory in the Centre for Neuroscience Studies and the Cardiovascular Stress Response Lab in Kinesiology.',
    location:
      "Centre for Neuroscience Studies (15 O'Kill St.), and the School of Kinesiology (28 Division St.) Kingston, ON",
    compensation: 'Participants will be compensated $40.',
    whoIsConducting:
      'Dr. DJ Cook (P.I), Nicole Cloverdale is the main contact.',
    benefits:
      'There are no direct benefits to the participant, but we hope this study will provide important information about vascular health in women who experience migraines.',
    inclusion:
      '1. Female 2. 18-35 years old 3. Women who suffer from migraines as well as those who do not (control participants)',
    exclusion:
      '1. Taking preventive migraine medication or other medications that may affect blood vessels 2. Males',
    expectations:
      'Testing takes 2.5-3 hours and includes a series of ultrasound examinations on the head and arm, along with some measures of blood pressure and pulse.',
  },
  {
    _id: ObjectID('stromanStudy'),
    title: 'Neural Basis of Pain (Females)',
    date: 'March 2019',
    purpose:
      'The purpose of this study is to learn more about the neural basis of pain sensitivity associated with chronic pain',
    lab: 'Stroman Laboratory.',
    location: "Queen's MRI Facility. 15 O'Kill St, Kingston, ON.",
    compensation:
      'Participants will be compensated $20/hour for approximately 3 hours.',
    whoIsConducting:
      'Patrick Stroman (P.I), Jocelyn Powers (PhD candidate), Howie Warren (MSc. candidate)',
    benefits:
      'There are no direct benefits to participating in this study. However, the information we obtain will improve our understanding of fibromyalgia and other chronic pain conditions, which could potentially improve future diagnostic and treatment strategies for these conditions.',
    inclusion:
      '1. Female 2. 19-60 years old 3. Must be healthy or have diagnosed fibromyalgia 4. MRI compatible',
    exclusion:
      '1. Male 2. Under 19 or over 60 years of age 3. History of mental illness or severe head trauma 4. Having medical conditions that are not compatible with magnetic resonance imaging (i.e. pacemakers)',
    expectations:
      'Participants will undergo two fMRI sessions scheduled approximately 1 week apart. During these sessions they will be given a noxious heat stimulus to the palm of their right hand. They will be asked to rate the pain associated with these stimuli. Participants with fibromyalgia will also be asked to donate a saliva sample for future genetic testing.',
  },
  {
    _id: ObjectID('exerciseStudy'),
    title: 'Exercise Intensity’s impact on Muscle',
    date: 'May 2019',
    purpose:
      'To examine the time-course of changes in gene expression and protein content after different exercise intensities in human skeletal muscle',
    lab: "Queen's Muscle Physiology Laboratory",
    location: 'SKHS Kingston, ON.',
    compensation: 'Participants are given $200',
    whoIsConducting: 'Hashim Islam',
    benefits: 'Free fitness assessment',
    inclusion: '1. Adults aged 18-30 2. Recreationally active 3. Male',
    exclusion:
      '1. History of cardiometabolic disease (e.g. hypertension, diabetes) 2. Smokers 3. Currently taking prescription medication and/or performance enhancing supplements (e.g. creatine) 4. Currently involved in a systematic training program',
    expectations:
      '1. 1 preliminary visit (less than an hour) during which participants will perform a cycling test to exhaustion (test duration is typically less than 20 min) 2. 2 experimental sessions (7 am - 9 pm, 2 weeks apart), EACH involving: - ~30 min interval cycling - 6 muscle biopsies (3 from each leg) - 4 blood samples (2 from each arm) 3. Participants are free to read, use their laptops, and/or watch TV but must remain in the lab over the course of the day. 4. All meals will be provided 5. Experimental sessions will be conducted on Mondays or Tuesdays',
  },
  {
    _id: ObjectID('symptomsStudy'),
    title: 'METDA: Depression and/or Anxiety Study',
    date: 'May 2019',
    purpose:
      'Primarily to test the efficacy of MET-2, a gut repopulating biological product, on depression and anxiety symptoms, as well as the safety and tolerability of the product',
    lab: 'Milev Laboratory.',
    location: 'Providence Care Hospital. Kingston, ON.',
    compensation:
      'Yes, $50 for every in-hospital visit (for a total of 5 visits).',
    whoIsConducting: 'Arthi Chinna Meyyappan',
    benefits: '',
    inclusion:
      '1. Between the ages 18-65 2. Depressed or anxious 3. Not currently taking any antidepressants',
    exclusion: '1. You are currently not taking any antidepressent medication',
    expectations: '',
  },
  {
    _id: ObjectID('fibroStudy'),
    title: 'Neural Basis of Pain (Females with Fibromyalgia)',
    date: 'May 2019',
    purpose:
      'To learn more about the neural basis of pain sensitivity associated with chronic pain',
    lab: 'Stroman Laboratory.',
    location: "Queen's MRI Facility. 15 O'Kill St, Kingston, ON.",
    compensation:
      'Participants will be compensated $20/hour for approximately 3 hours.',
    whoIsConducting:
      'Patrick Stroman (P.I), Jocelyn Powers (PhD candidate), Howie Warren (MSc. candidate)',
    benefits:
      'There are no direct benefits to participating in this study. However, the information we obtain will improve our understanding of fibromyalgia and other chronic pain conditions, which could potentially improve future diagnostic and treatment strategies for these conditions.',
    inclusion:
      '1. Female 2. 19-60 years old 3. Diagnosed fibromyalgia 4. MRI compatible',
    exclusion:
      '1. Male 2. Under 19 or over 60 years of age 3. History of mental illness or severe head trauma 4. Having medical conditions that are not compatible with magnetic resonance imaging (i.e. pacemakers)',
    expectations:
      'Participants will undergo two fMRI sessions scheduled approximately 1 week apart. During these sessions they will be given a noxious heat stimulus to the palm of their right hand. They will be asked to rate the pain associated with these stimuli. Participants with fibromyalgia will also be asked to donate a saliva sample for future genetic testing.',
  },
];

module.exports = hardCodedStudies;
