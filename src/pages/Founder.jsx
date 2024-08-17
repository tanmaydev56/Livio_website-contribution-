import { Box, Flex, Image, Text, VStack, Stack } from "@chakra-ui/react";
import img1 from "../assets/portriat-photography-smiling-removebg-preview 1.svg";
import img2 from "../assets/unsplash.png";
import styles from "../styles/founder.module.css"; // Import CSS module

function LivioWebsite() {
  return (
    <div
      style={{
        overflow: "hidden",
        height: "1530px",
      }}
    >
      <Stack bg="#f2f7f2">
        <Box position="relative" minH="794px" mt="30px" textAlign="center">
          <Image
            src={img2}
            alt="Hero Background"
            position="absolute"
            inset="0"
            w="100%"
            h="100%"
            objectFit="cover"
          />
          <Text
            position="absolute"
            fontSize="96px"
            fontWeight="500"
            lineHeight="100px"
            textAlign="center"
            maxWidth="596px"
            fontFamily="Apfel Grotezk, sans-serif"
          >
            It &apos;s time to
            <span
              style={{
                fontSize: "128px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "100px",
                color: "#000",
              }}
            >
              {" "}
              know us{" "}
            </span>
          </Text>
        </Box>
        <Stack maxW="100%" mt="61px" ml="70px">
          <Flex direction={{ base: "column", "2xl": "row" }}>
            <VStack
              align="stretch"
              width={{ base: "100%", md: "60%" }}
              spacing="24px"
              className={styles.textContainer}
            >
              <Text
                fontSize="24px"
                fontWeight="400"
                lineHeight="31px"
                fontFamily="Apfel Grotezk, sans-serif"
                width="549px"
                height="171px"
                textAlign="justify"
              >
                Welcome to Livio, where exceptional craftsmanship meets timeless
                design. At Livio, we believe that furniture should be more than
                just functional-it should be a reflection of your style and
                personality. Our team is dedicated to creating beautiful,
                high-quality pieces that transform spaces into homes.
              </Text>
              <div>
                <Text
                  marginTop="171px"
                  fontSize="48px"
                  fontWeight="600"
                  fontStyle="normal"
                  color="#000"
                  lineHeight="31px"
                  height="31px"
                  width="500px"
                  className={`${styles.livio} ${styles.founderTitle}`}
                >
                  Alex Donovan, Founder
                </Text>
                <Text
                  fontSize="24px"
                  fontWeight="500"
                  fontFamily="Apfel Grotezk, sans-serif"
                  textAlign="justify"
                  width="712px"
                  height="171px"
                  className={`${styles.where} ${styles.aboutText}`}
                >
                  Livio was founded by Alex Donovan, a visionary designer with a
                  passion for innovation and a commitment to excellence. With
                  over two decades of experience in the furniture industry, Alex
                  started Livio to offer a diverse range of contemporary and
                  classic furniture to suit every taste.
                </Text>
              </div>
            </VStack>
            <VStack height="100vh" className={styles.imgContainer}>
              <Text
                fontSize="24px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="31px"
                textAlign="right"
                width="549px"
                height="171px"
                zIndex="4"
                className={styles.aboutText}
              >
                At Livio, our goal is to redefine the furniture shopping
                experience by offering exceptional quality, innovative designs,
                and personalized service. We strive to create furniture that not
                only enhances the beauty and functionality of your home but also
                reflects your unique style and personality.
              </Text>
              <Image
                src={img1}
                height="565px"
                width="469px"
                position="absolute"
                style={{
                  transform: "translate(20%,12%)",
                }}
                zIndex={0}
                className={styles.img1}
              />
            </VStack>
          </Flex>
        </Stack>
      </Stack>
    </div>
  );
}

export default LivioWebsite;
