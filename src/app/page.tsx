"use client"
import CarouselDisplay from "@/components/CarouselDisplay";
import { Button, Container, Flex, Group, Card, Text, Badge } from "@mantine/core";
import perago3 from "../assets/perago3.png"
import perago4 from "../assets/perago4.png"
import Image from 'next/image';



export default function Home() {
  return (
    <>
      <CarouselDisplay/>
      <div className=" text-center">
        <div className="bg-[#F5F5F5] py-8">
          <Container px={0} size="50rem" >
            <p className="text-[#55ba4f] text-3xl font-semibold pb-3">Who We Are</p>
            <p className="text-justify leading-7">Perago Systems is a technology company that focuses on developing 
              and implementing electronic government and B2B commerce solutions 
              towards the provision of various online transactional services. 
              Perago provides strong technical support and knowledge transfer 
              to sustain the competitive advantages gained by customers from 
              their ICT investments.
              </p>
          </Container>
        </div>
        <div className="py-8">
          <Container px={0} size="65rem" >
            <p className="text-[#55ba4f] text-3xl font-semibold pb-3">What We Offer</p>
            <Flex
              direction={{ base: 'column', sm: 'row' }}
              gap={{ base: 'sm', sm: 'lg' }}
              justify={{ sm: 'center' }}
            >
              <div className="w-[50%]">
                <Image
                  
                  src = {perago4}
                  alt ="perago image"
                  />
              </div>
              <div>
                <p className="text-justify pb-8">
                  E-Services Platform 
                  One stop public services provision platform.
                  The E-Services Platform is an intelligent business process management 
                  solution enabling client&apos;s to achieve paperless business transformation. 
                  It allows organizations to build and run business applications, including 
                  designing e-forms, workflows, data management, and reports across enterprise
                    and within departments.
                </p>
                <Group>
                  <Button color="gray" >View Details</Button>
                  <Button color="green">Request Demo</Button>

                </Group>
              </div>
             
           
            </Flex>

          
          </Container>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section component="a" href="https://mantine.dev/">
       
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>Norway Fjord Adventures</Text>
        <Badge color="pink">On Sale</Badge>
      </Group>

      <Text size="sm" c="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes with tours and
        activities on and around the fjords of Norway
      </Text>

      <Button color="blue" fullWidth mt="md" radius="md">
        Book classic tour now
      </Button>
    </Card>
        </div>

      
        

        
        

        </div>
        

      <div className="">

      </div>
    </>
  );
}
