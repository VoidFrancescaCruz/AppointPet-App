/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';
import styles from './styles';
import colors from '../../constants/colors';
import imagePath from '../../constants/imagePath';

const Services = () => {
  return (
    <ScrollView>
      <View name="Service1">
        <View style={[styles.container, styles.secondary]}>
          <Image source={imagePath.service1} style={styles.normalImg} />
        </View>
        <View style={[styles.container1, styles.secondary]}>
          <Text style={[styles.header0, styles.fontSemiBold]}>Diagnosis and Therapeutic</Text>
          <Text style={[styles.header1, styles.fontMedium]}>P 1, 499.00</Text>
          <Text style={[styles.descTxt, styles.fontReg, {color: colors.black}]}>
            {'\t'}{'\t'}{'\t'}To find out the true cause of your pet’s symptoms
            will most often require some diagnostic process.
            The capacity to run a variety of tests including a
            CBC, CMP, urinalyses, and other tests that will play
            a critical role in making sure that your loved one is
            taken care of.
          </Text>
          <Text style={[styles.descTxt, styles.fontReg, {color: colors.black}]}>
            {'\t'}{'\t'}{'\t'}Diagnostic services to regularly monitor your pet’s health.
            This enables us to keep track of what’s normal for them and spot
            changes before they manifest into bigger issues. It also provides
            us with a comparison tool when your pet is feeling unwell, which
            helps us diagnose your pets more quickly. A variety of therapeutic
            services can make a difference in your animal, regardless of whether
            you have a dog, cat, or even a horse. Vets will talk to you about
            chiropractic adjustments, exercises, and more that can be done to
            alleviate their pain and improve their range of motion. A service
            that can help without having to use severe medications or surgery.
          </Text>
        </View>
      </View>

      <View name="Service2">
        <View style={[styles.container, styles.secondary]}>
          <Image source={imagePath.service2} style={styles.normalImg} />
        </View>
        <View style={[styles.container1, styles.secondary]}>
          <Text style={[styles.header0, styles.fontSemiBold]}>Surgical</Text>
          <Text style={[styles.header1, styles.fontMedium]}>P 1, 499.00</Text>
          <Text style={[styles.descTxt, styles.fontReg, {color: colors.black}]}>
            {'\t'}{'\t'}{'\t'}Veterinary surgeons examine animals before
            an operation to determine the type of surgery necessary and the
            animal's ability to withstand treatment. They perform surgery and
            provide follow-up care to promote healing. They administer
            medications and anesthesia as required. They work as members of
            an animal's total health care team.
          </Text>
          <Text style={[styles.descTxt, styles.fontReg, {color: colors.black}]}>
            {'\t'}{'\t'}{'\t'}Veterinary surgeons may have
            to lift or position animals. They may have to stand for long
            periods while performing surgery. Depending on where they work and
            their scope of practice, veterinary surgeons may travel to diagnose
            and treat their animal patients. They may work evenings, nights and
            weekends, particularly if on call for emergencies.
          </Text>
        </View>
      </View>

      <View name="Service3">
        <View style={[styles.container, styles.secondary]}>
          <Image source={imagePath.service3} style={styles.normalImg} />
        </View>
        <View style={[styles.container1, styles.secondary]}>
          <Text style={[styles.header0, styles.fontSemiBold]}>Vaccine</Text>
          <Text style={[styles.header1, styles.fontMedium]}>P 1, 499.00</Text>
          <Text style={[styles.descTxt, styles.fontReg, {color: colors.black}]}>
            {'\t'}{'\t'}{'\t'}Vaccines have a long and successful history
            of preventing and controlling disease. The veterinary vaccines
            available today represent years of innovative research and meet
            many of the disease threats faced by pets and farm animals in the
            UK today.
          </Text>
          <Text style={[styles.descTxt, styles.fontReg, {color: colors.black}]}>
            {'\t'}{'\t'}{'\t'}Vaccines work by stimulating an immune response in an
            animal without causing the disease itself. When healthy animals
            are vaccinated, their own immune system responds to the vaccine
            and can remember the infectious agent to which the animal is
            vaccinated. This means, if appropriately vaccinated animals are
            then exposed to the pathogen against which they have been
            vaccinated, they can expect a level of protection from disease.
          </Text>
        </View>
      </View>

      <View name="Service4">
        <View style={[styles.container, styles.secondary]}>
          <Image source={imagePath.service4} style={styles.normalImg} />
        </View>
        <View style={[styles.container1, styles.secondary]}>
          <Text style={[styles.header0, styles.fontSemiBold]}>Consultation</Text>
          <Text style={[styles.header1, styles.fontMedium]}>P 1, 499.00</Text>
          <Text style={[styles.descTxt, styles.fontReg, {color: colors.black}]}>
            {'\t'}{'\t'}{'\t'}In a consultation the vet will discuss
            with you any concerns that you have about the well-being of
            your pet and explain in detail what can be done to help your
            pet to the best possible health outcome. The vets need to ask
            you a lot of questions about your animal and it’s environment
            and it is important for you to be as accurate and detailed as
            possible as taking this history is a critical part of reaching
            a correct diagnosis.
          </Text>
        </View>
      </View>

      <View name="Service5">
        <View style={[styles.container, styles.secondary]}>
          <Image source={imagePath.service5} style={styles.normalImg} />
        </View>
        <View style={[styles.container1, styles.secondary]}>
          <Text style={[styles.header0, styles.fontSemiBold]}>Laboratory</Text>
          <Text style={[styles.header1, styles.fontMedium]}>P 1, 499.00</Text>
          <Text style={[styles.descTxt, styles.fontReg, {color: colors.black}]}>
            {'\t'}{'\t'}{'\t'}It is an institution in which research
            on various objects (blood, cadavers, organs) of veterinary
            medicine is conducted, along with study of their properties,
            composition, structure, and of the chemical and biological
            processes occurring in them.
          </Text>
        </View>
      </View>

      <View name="Service6">
        <View style={[styles.container, styles.secondary]}>
          <Image source={imagePath.service6} style={styles.normalImg} />
        </View>
        <View style={[styles.container1, styles.secondary]}>
          <Text style={[styles.header0, styles.fontSemiBold]}>Dentistry</Text>
          <Text style={[styles.header1, styles.fontMedium]}>P 1, 499.00</Text>
          <Text style={[styles.descTxt, styles.fontReg, {color: colors.black}]}>
            {'\t'}{'\t'}{'\t'}Veterinary dentistry, oral medicine,
            and oral surgery are part of the practice of veterinary
            medicine and are regarded as such under state veterinary
            practice acts. Veterinary dentistry, oral medicine, and oral
            surgery include the cleaning, adjustment, filing, extraction,
            or repair of animals' teeth and all other aspects of oral health
            care in animals.
          </Text>
        </View>
      </View>

      <View name="Service7">
        <View style={[styles.container, styles.secondary]}>
          <Image source={imagePath.service7} style={styles.normalImg} />
        </View>
        <View style={[styles.container1, styles.secondary]}>
          <Text style={[styles.header0, styles.fontSemiBold]}>Radiology</Text>
          <Text style={[styles.header1, styles.fontMedium]}>P 1, 499.00</Text>
          <Text style={[styles.descTxt, styles.fontReg, {color: colors.black}]}>
            {'\t'}{'\t'}{'\t'}A service possesses radiological imaging
            capabilities that enable us to get an inside look at your pet’s
            health. X-ray images (radiographs) allow radiologists and other
            specialists to examine the body for injury or disease. Not only
            used for bones, radiographs provide examination of the heart,
            lungs, and abdominal organs. It is quick, painless, and economical.
            In some cases, follow-up examinations are used to monitor a
            patient’s progress.
          </Text>
        </View>
      </View>

      <View name="Service8">
        <View style={[styles.container, styles.secondary]}>
          <Image source={imagePath.service8} style={styles.normalImg} />
        </View>
        <View style={[styles.container1, styles.secondary]}>
          <Text style={[styles.header0, styles.fontSemiBold]}>Pharmacy</Text>
          <Text style={[styles.header1, styles.fontMedium]}>P 1, 499.00</Text>
          <Text style={[styles.descTxt, styles.fontReg, {color: colors.black}]}>
            {'\t'}{'\t'}{'\t'}Clinical pharmacists provide comprehensive direct
            patient care services, collaborate and initiate clinical research,
            and promote rational drug therapy. Services provided are tailored
            to patient care needs and include drug information, dosing advice,
            adverse reaction information, monitoring, pharmacokinetic
            monitoring and client education.
          </Text>
        </View>
      </View>

      <View name="Service9">
        <View style={[styles.container, styles.secondary]}>
          <Image source={imagePath.service9} style={styles.normalImg} />
        </View>
        <View style={[styles.container1, styles.secondary]}>
          <Text style={[styles.header0, styles.fontSemiBold]}>Pet Grooming</Text>
          <Text style={[styles.header1, styles.fontMedium]}>P 1, 499.00</Text>
          <Text style={[styles.descTxt, styles.fontReg, {color: colors.black}]}>
            {'\t'}{'\t'}{'\t'}Animal grooming means the washing, clipping,
            drying and grooming of domesticated animals. While for many people
            the concept of grooming your pet conjures up notions of brushes and
            bows, it is in fact a vital element to their overall health and
            wellbeing. Regularly grooming your animal allows you to catch any
            underlying diseases or conditions early, meaning that they will be
            able to be treated quicker and more efficiently and will therefore
            be less likely to have any lasting effect on your pet.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Services;
