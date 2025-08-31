"use client"

import React, { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion"
import {
  CalendarToday as CalendarIcon,
  LocationOn as MapPinIcon,
  ArrowForward as ArrowRightIcon,
  Menu as MenuIcon,
  Close as XIcon,
  KeyboardArrowDown as ChevronDownIcon,
  KeyboardArrowUp as ChevronUpIcon,
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedinIcon,
  LinkedIn as LinkedInIcon,
  Phone as PhoneIcon,
  Email as MailIcon,
  Language as GlobeIcon,
  Psychology as BrainIcon,
  AutoAwesome as SparklesIcon,
  Speed as ZapIcon,
  TrackChanges as TargetIcon,
  Groups as UsersIcon,
  Chat as MessageSquareIcon,
  SmartToy as BotIcon,
  TrendingUp as TrendingUpIcon,
  Mic as MicIcon,
  Cloud as CloudIcon,
  Memory as CpuIcon,
  Favorite as HeartIcon,
} from "@mui/icons-material"
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Tab,
  Tabs,
  TextField,
  Typography,
  useMediaQuery,
  Snackbar,
  Alert,
  useTheme,
  Chip,
} from "@mui/material"

import { styled, alpha, createTheme, ThemeProvider } from "@mui/material/styles"

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#2b6777",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#ffffff",
      contrastText: "#2b6777",
    },
    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },
    text: {
      primary: "#333333",
      secondary: "#666666",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
      textAlign: "center",
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
          fontWeight: 500,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
  },
})

const GradientTypography = styled(Typography)(({ theme }) => ({
  background: `linear-gradient(to right, ${theme.palette.primary.main}, ${alpha(theme.palette.primary.main, 0.7)})`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  textFillColor: "transparent",
}))

const StyledBadge = styled(Chip)(({ theme }) => ({
  borderRadius: 50,
  padding: theme.spacing(0.5, 2),
  marginBottom: theme.spacing(2),
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
}))

const WhiteBadge = styled(Chip)(({ theme }) => ({
  borderRadius: 50,
  padding: theme.spacing(0.5, 2),
  marginBottom: theme.spacing(2),
  backgroundColor: alpha(theme.palette.common.white, 0.2),
  color: theme.palette.common.white,
}))

const CountdownBox = styled(Box)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.common.white, 0.1),
  backdropFilter: "blur(8px)",
  border: `1px solid ${alpha(theme.palette.common.white, 0.2)}`,
  borderRadius: theme.shape.borderRadius * 2,
  padding: theme.spacing(3),
  textAlign: "center",
}))

const SocialButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.common.white,
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.2),
  },
}))

const ElevationScroll = ({ children }) => {
  return React.cloneElement(children, {
    style: {
      // backgroundColor: "",
      // backdropFilter: "blur(8px)",
      // transition: "backdrop-filter 0.3s ease",
    },
  })
}

function ScrollTop() {
  const [visible, setVisible] = useState(false)
  const [isHeroSection, setIsHeroSection] = useState(true)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const heroRef = useRef(null)

  const scrollToSection = (ref) => {
    const section = document.getElementById(ref)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setVisible(scrollPosition > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          style={{
            position: "fixed",
            bottom: 24,
            right: 24,
            zIndex: 50,
          }}
        >
          <IconButton
            color="primary"
            sx={{
              height: 48,
              width: 48,
              borderRadius: "50%",
              boxShadow: 3,
              backgroundColor: "white",
            }}
            onClick={handleClick}
          >
            <ChevronUpIcon />
          </IconButton>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function SynergifyWebsite() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  const [alertInfo, setAlertInfo] = useState({ open: false, message: "", severity: "success" })
  const [isHeroSection, setIsHeroSection] = useState(true)

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState({
    title: "",
    content: "",
  })

  const [drawerOpen, setDrawerOpen] = useState(false)

  const heroRef = useRef(null)
  const aboutRef = useRef(null)
  const servicesRef = useRef(null)
  const whyChooseRef = useRef(null)
  const companyRef = useRef(null)
  const partnersRef = useRef(null)
  const contactRef = useRef(null)
  const footerRef = useRef(null)

  const heroInView = useInView(heroRef, { once: false, amount: 0.3 })
  const aboutInView = useInView(aboutRef, { once: false, amount: 0.3 })
  const servicesInView = useInView(servicesRef, { once: false, amount: 0.3 })
  const whyChooseInView = useInView(whyChooseRef, { once: false, amount: 0.3 })
  const companyInView = useInView(companyRef, { once: false, amount: 0.3 })
  const partnersInView = useInView(partnersRef, { once: false, amount: 0.3 })
  const contactInView = useInView(contactRef, { once: false, amount: 0.3 })
  const footerInView = useInView(footerRef, { once: false, amount: 0.3 })

  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8])

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const [activeTab, setActiveTab] = useState(0)

  const navLinks = [
    { name: "HOME", ref: "hero" },
    { name: "ABOUT", ref: "about" },
    { name: "SERVICES", ref: "services" },
    { name: "WHY CHOOSE US", ref: "why-choose" },
    { name: "CONTACT", ref: "contact" },
  ]

  const aboutCards = [
    {
      title: "Innovation First",
      icon: <ZapIcon sx={{ fontSize: 40, color: "#2b6777" }} />,
      content:
        "Cutting-edge AI solutions that push the boundaries of what's possible.",
      extendedContent:
        "At Synergify, we prioritize innovation in every solution we create. Our team of AI experts constantly explores emerging technologies, from machine learning algorithms to neural networks, ensuring that our clients always have access to the most advanced AI capabilities. We don't just follow trends – we set them, pioneering new approaches to artificial intelligence that transform how businesses operate and compete in the digital age.",
    },
    {
      title: "Precision Focus",
      icon: <TargetIcon sx={{ fontSize: 40, color: "#2b6777" }} />,
      content:
        "Targeted solutions that address specific business challenges with accuracy.",
      extendedContent:
        "Every business faces unique challenges, and generic solutions rarely deliver optimal results. Our precision-focused approach begins with deep analysis of your specific needs, industry requirements, and operational constraints. We then craft tailored AI solutions that address your exact pain points, ensuring maximum impact and ROI. From predictive analytics for supply chain optimization to custom NLP models for customer service automation, our solutions are built with surgical precision.",
    },
    {
      title: "Human-Centric Design",
      icon: <HeartIcon sx={{ fontSize: 40, color: "#2b6777" }} />,
      content:
        "Technology designed to enhance human capabilities, not replace them.",
      extendedContent:
        "We believe AI should augment human intelligence, not replace it. Our human-centric design philosophy ensures that every AI solution we develop enhances human decision-making, creativity, and productivity. We focus on creating intuitive interfaces, transparent AI processes, and systems that empower your team to achieve more. Our solutions are designed to be collaborative partners that amplify human potential while maintaining the human touch that's essential for business success.",
    },
  ];

  const services = [
    {
      icon: <BrainIcon sx={{ fontSize: 48, color: "#2b6777" }} />,
      title: "Machine Learning (ML)",
      description: "Advanced algorithms that learn and adapt to optimize your business processes automatically."
    },
    {
      icon: <MessageSquareIcon sx={{ fontSize: 48, color: "#2b6777" }} />,
      title: "Natural Language Processing (NLP)",
      description: "Transform unstructured text data into actionable insights and automate communication."
    },
    {
      icon: <BotIcon sx={{ fontSize: 48, color: "#2b6777" }} />,
      title: "Robotic Process Automation (RPA)",
      description: "Automate repetitive tasks and workflows to increase efficiency and reduce human error."
    },
    {
      icon: <TrendingUpIcon sx={{ fontSize: 48, color: "#2b6777" }} />,
      title: "Predictive Analytics",
      description: "Forecast trends and outcomes using historical data to make informed strategic decisions."
    },
    {
      icon: <MicIcon sx={{ fontSize: 48, color: "#2b6777" }} />,
      title: "Conversational AI",
      description: "Intelligent chatbots and virtual assistants that provide seamless customer experiences."
    },
    {
      icon: <CloudIcon sx={{ fontSize: 48, color: "#2b6777" }} />,
      title: "Cloud-based Integration APIs",
      description: "Scalable cloud solutions that integrate seamlessly with your existing infrastructure."
    }
  ];

  const whyChooseUsReasons = [
    {
      icon: <CpuIcon sx={{ fontSize: 48, color: "#2b6777" }} />,
      title: "AI-First Approach",
      description: "We prioritize artificial intelligence in every solution, ensuring cutting-edge technology drives your business forward."
    },
    {
      icon: <GlobeIcon sx={{ fontSize: 48, color: "#2b6777" }} />,
      title: "Industry Agnostic",
      description: "Our flexible solutions adapt to any industry, from healthcare to finance, manufacturing to retail."
    },
    {
      icon: <HeartIcon sx={{ fontSize: 48, color: "#2b6777" }} />,
      title: "Customer-Centric Design",
      description: "Every solution is crafted with your specific needs in mind, ensuring maximum value and user satisfaction."
    },
    {
      icon: <ZapIcon sx={{ fontSize: 48, color: "#2b6777" }} />,
      title: "Agile Delivery",
      description: "Fast, iterative development cycles that allow for quick deployment and continuous improvement."
    }
  ];

  const stats = [
    { number: "3+", label: "AI Solutions Deployed" },
    { number: "2+", label: "Happy Clients" },
    { number: "99%", label: "Client Satisfaction" }
  ];

  useEffect(() => {
    setIsHeroSection(true)
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const onSubmit = async (formData) => {
    setIsSubmitting(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      setIsSubmitted(true)
      setAlertInfo({ open: true, message: "Message sent successfully!", severity: "success" })
    } catch (error) {
      setAlertInfo({ open: true, message: "Failed to send message. Please try again.", severity: "error" })
    } finally {
      setIsSubmitting(false)
    }
  }

const handleSubmit = (e) => {
  e.preventDefault()

  // Send form data to Formspree
  fetch('https://formspree.io/f/mzzgkaeo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      if (response.ok) {
        console.log('Form successfully submitted')
        // Optionally show a success message here
      } else {
        console.error('Form submission failed')
        // Optionally show an error message here
      }
    })
    .catch((error) => {
      console.error('Error submitting the form', error)
      // Optionally show an error message here
    })

  // Reset form state
  onSubmit(formData)
  setFormData({
    name: "",
    email: "",
    company: "",
    message: "",
  })
  setActiveTab(0)
}


  const openModal = (title, content) => {
    setModalContent({ title, content })
    setIsModalOpen(true)
  }

  const scrollToSection = (ref) => {
    const element = document.getElementById(ref)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setDrawerOpen(false)
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const slideIn = {
    hidden: { x: -60, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6 } },
  }

  const scaleUp = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.6 } },
  }

  const rotateIn = {
    hidden: { rotate: -10, opacity: 0 },
    visible: { rotate: 0, opacity: 1, transition: { duration: 0.6 } },
  }

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue)
  }

  return (
    <ThemeProvider theme={customTheme}>
      <Box sx={{ color: "text.primary", overflow: "hidden" }}>
        {/* Navigation */}
        <Box
           sx={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 40,
            backgroundColor: heroInView ? "transparent" : "#2b6777",
            backdropFilter: heroInView ? "none" : "none",
            borderBottom: heroInView ? "1px solid rgba(43, 103, 119, 0.1)" : "none",
            transition: "all 0.3s ease-in-out",
          }}
        >
          <Container>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", py: 2 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <img src="\logo.png" alt="" width="8%" />
                <Typography variant="h5" fontWeight="bold" mb={2} color="white">
                  The Synergify
                </Typography>
                
              </Box>

              {/* Desktop Navigation */}
              <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
                {navLinks.map((link) => (
                  <Button
                    key={link.name}
                    onClick={() => scrollToSection(link.ref)}
                    sx={{
                      color: "primary.contrastText",
                      fontWeight: 500,
                      "&:hover": { color: "primary.contrastText", fontSize: "100.5%" },
                    }}
                  >
                    {link.name}
                  </Button>
                ))}
              </Box>

              {/* Mobile Menu Button */}
              <IconButton
                sx={{ display: { xs: "block", md: "none" }, color: "white"}}
                onClick={() => setDrawerOpen(true)}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Container>
        </Box>

        {/* Mobile Drawer */}
        <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
          <Box sx={{ width: 250, pt: 2 }}>
            <List>
              {navLinks.map((link) => (
                <ListItem key={link.name} disablePadding>
                  <ListItemButton onClick={() => scrollToSection(link.ref)}>
                    <ListItemText primary={link.name} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>

        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              style={{
                position: "fixed",
                inset: 0,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 50,
                padding: 16,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
            >
              <motion.div
                style={{
                  backgroundColor: customTheme.palette.background.paper,
                  borderRadius: customTheme.shape.borderRadius * 2,
                  maxWidth: 500,
                  width: "100%",
                  padding: 24,
                  position: "relative",
                }}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <IconButton
                  size="small"
                  sx={{ position: "absolute", top: 8, right: 8 }}
                  onClick={() => setIsModalOpen(false)}
                >
                  <XIcon fontSize="small" />
                </IconButton>
                <Typography variant="h5" fontWeight="bold" mb={2}>
                  {modalContent.title}
                </Typography>
                <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
                  {modalContent.content}
                </Typography>
                <Button variant="contained" fullWidth sx={{ mt: 3 }} onClick={() => setIsModalOpen(false)}>
                  Close
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hero Section */}
        <Box
          id="hero"
          ref={heroRef}
          sx={{
            position: "relative",
            height: "100vh",
            // width: "100%",
            overflow: "hidden",
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0)), url("/landing.webp")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left top", // ✅ align image to the left
            backgroundSize: "auto 170%",    // ✅ keep full height, scale width
          }}
          style={{ opacity: 0.9 }}
        >


          <motion.div
            style={{
              position: "relative",
              zIndex: 10,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: customTheme.palette.common.white,
              padding: 16,
              textAlign: "center",
            }}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >

            <motion.div variants={fadeIn}>
              <Typography
                variant="h1"
                align="center"
                mb={3}
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "3rem", md: "5rem", lg: "6rem" },
                  textShadow: "0 2px 4px rgba(0,0,0,0.2)",
                }}
              >
                The Synergify
              </Typography>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Typography
                variant="h3"
                align="center"
                mb={6}
                sx={{
                  fontSize: { xs: "1.5rem", md: "2rem", lg: "2.5rem" },
                  opacity: 0.9,
                  fontWeight: 300,
                }}
              >
                The world's future in AI.
              </Typography>
            </motion.div>

            <motion.div
              variants={fadeIn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="contained"
                size="large"
                sx={{
                  bgcolor: customTheme.palette.common.white,
                  color: "primary.main",
                  "&:hover": { bgcolor: alpha(customTheme.palette.common.white, 0.9) },
                  fontWeight: 600,
                  px: 6,
                  py: 2,
                  borderRadius: 50,
                }}
                onClick={() => scrollToSection("about")}
                endIcon={<ChevronDownIcon />}
              >
                Discover Our Solutions
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            style={{
              position: "absolute",
              bottom: 40,
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 20,
            }}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <IconButton
              color="secondary"
              sx={{
                borderRadius: "50%",
                bgcolor: alpha("#ffffff", 0.3),
                backdropFilter: "blur(4px)",
                "&:hover": {
                  bgcolor: alpha("#ffffff", 0.5),
                  transform: "scale(1.1)",
                },
              }}
              onClick={() => scrollToSection("about")}
            >
              <ChevronDownIcon fontSize="large" />
            </IconButton>
          </motion.div>
        </Box>

        {/* About Section */}
        <Box id="about" ref={aboutRef} sx={{ py: 8, px: 2 }}>
          <Container>
            <motion.div
              initial="hidden"
              animate={aboutInView ? "visible" : "hidden"}
              variants={staggerContainer}
              style={{ maxWidth: 1400, margin: "0 auto" }}
            >
              <motion.div variants={fadeIn} style={{ textAlign: "center", marginBottom: 64 }}>
                <Typography
                  variant="h2"
                  fontWeight="bold"
                  mb={3}
                  sx={{ fontSize: { xs: "2.5rem", md: "3.5rem" } }}
                >
                  About <GradientTypography component="span" variant="h2" sx={{ fontSize: { xs: "2.5rem", md: "3.5rem" } }}>Synergify</GradientTypography>
                </Typography>
              </motion.div>
              <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={6}>
                  <motion.div variants={fadeIn}>
                    <Box component="ul" sx={{ pl: 3, fontSize: { xs: "1.1rem", md: "1.25rem" }, color: "text.secondary", lineHeight: 1.7 }}>
                      <li><strong>Innovation First:</strong> Cutting-edge AI solutions that push the boundaries of what's possible.</li>
                      <li><strong>Precision Focus:</strong> Targeted solutions that address specific business challenges with accuracy.</li>
                      <li><strong>Human-Centric Design:</strong> Technology designed to enhance human capabilities, not replace them.</li>
                    </Box>
                  </motion.div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <motion.div variants={scaleUp} style={{ display: "flex", justifyContent: "center" }}>
                    <Box
                      component="img"
                      src="/about-us.jpg"
                      alt="Synergify Team"
                      sx={{
                        width: { xs: "100%", md: "90%" },
                        maxHeight: 350,
                        borderRadius: 4,
                        boxShadow: 6,
                        objectFit: "cover",
                      }}
                    />
                  </motion.div>
                </Grid>
              </Grid>

            </motion.div>
          </Container>
        </Box>

        {/* Services Section */}
        <Box
          id="services"
          ref={servicesRef}
          sx={{
            py: 8,
            px: 2,
            bgcolor: "#2b6777",
          }}
        >
          <Container>
            <motion.div
              initial="hidden"
              animate={servicesInView ? "visible" : "hidden"}
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn} style={{ textAlign: "center", marginBottom: 48 }}>
                <Typography
                  variant="h2"
                  fontWeight="bold"
                  mb={3}
                  sx={{ fontSize: { xs: "2.5rem", md: "3.5rem" }, color: 'white' }}
                >
                  Our Services
                </Typography>
              </motion.div>
              <Grid container spacing={4}>
                {[{
                  title: 'Machine Learning (ML)',
                  desc: 'Advanced algorithms that learn and adapt to optimize your business processes automatically.'
                }, {
                  title: 'Mobile Applications',
                  desc: 'Transform unstructured text data into actionable insights and automate communication.'
                }, {
                  title: 'AI integrations',
                  desc: 'Automate repetitive tasks and workflows to increase efficiency and reduce human error.'
                }, {
                  title: 'Predictive Analytics',
                  desc: 'Forecast trends and outcomes using historical data to make informed strategic decisions.'
                }, {
                  title: 'Conversational AI',
                  desc: 'Intelligent chatbots and virtual assistants that provide seamless customer experiences.'
                }, {
                  title: 'Web-based solutions',
                  desc: 'Scalable cloud solutions that integrate seamlessly with your existing infrastructure.'
                }].map((service, idx) => (
                  <Grid item xs={12} md={4} key={service.title}>
                    <Card elevation={4} sx={{ height: "100%", bgcolor: 'white', color: '#2b6777', borderRadius: 9 }}>
                      <CardContent>
                        <Typography variant="h5" fontWeight="bold" mb={2} sx={{ color: '#2b6777' }}>{service.title}</Typography>
                        <Typography color="text.secondary">{service.desc}</Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Container>
        </Box>

        {/* Why Choose Us Section */}
        <Box
          id="why-choose"
          ref={whyChooseRef}
          sx={{
            py: 8,
            px: 2,
            background: "white",
        
            color: "#2b6777",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Background Pattern */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              opacity: 0.1,
              backgroundImage: `url("data:why.jpg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
          />

          <Container sx={{ position: "relative", zIndex: 2 }}>
            <motion.div initial="hidden" animate={whyChooseInView ? "visible" : "hidden"} variants={staggerContainer}>
              <motion.div variants={fadeIn} sx={{ mb: 8 }}>
                <Grid container spacing={4} alignItems="center">
                  <Grid item xs={12} md={5}>
                    <Box
                      component="img"
                      src="/why.jpg"
                      alt="Why Choose Synergify"
                      sx={{
                        width: '100%',
                        maxWidth: 400,
                        borderRadius: 4,
                        boxShadow: 6,
                        objectFit: 'cover',
                        display: 'block',
                        mx: { xs: 'auto', md: 0 },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={7}>
                    <Typography
                      variant="h4"
                      fontWeight="bold"
                      align="center"
                      mb={3}
                      sx={{ color: '#2b6777' }}
                    >
                      Why choose Sinergify?
                    </Typography>
                    <Box component="ul" sx={{ color: '#2b6777', fontSize: { xs: '1.1rem', md: '1.25rem' }, lineHeight: 1.7, pl: 3 }}>
                      <li style={{ marginBottom: 16 }}>
                        <strong style={{ color: '#2b6777' }}>AI-Driven Innovation:</strong> Every solution is powered by advanced artificial intelligence.
                      </li>
                      <li style={{ marginBottom: 16 }}>
                        <strong style={{ color: '#2b6777' }}>Industry-Neutral Solutions:</strong> Adaptable technologies that work across all industries.
                      </li>
                      <li style={{ marginBottom: 16 }}>
                        <strong style={{ color: '#2b6777' }}>User-Focused Design:</strong> Tailored to meet your unique business needs.
                      </li>
                      <li>
                        <strong style={{ color: '#2b6777' }}>Agile Execution:</strong> Rapid, iterative delivery for continuous improvement.
                      </li>
                    </Box>
                  </Grid>
                </Grid>
              </motion.div>

              {/* Stats Section */}
              <motion.div variants={fadeIn}>
                <Grid container spacing={3} sx={{ maxWidth: 800, mx: "auto" }}>
                  {stats.map((stat, index) => (
                    <Grid item xs={6} md={3} key={index}>
                      <motion.div variants={rotateIn}>
                        <CountdownBox>
                          <Typography variant="h3" fontWeight="bold" mb={1}>
                            {stat.number}
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={{ textTransform: "uppercase", letterSpacing: 1, opacity: 0.8 }}
                          >
                            {stat.label}
                          </Typography>
                        </CountdownBox>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              </motion.div>

              <motion.div
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: 48,
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: "white",
                    color: "primary.main",
                    "&:hover": { bgcolor: alpha(customTheme.palette.common.white, 0.5) },
                    fontWeight: 600,
                    px: 6,
                    py: 2,
                    borderRadius: 50,
                  }}
                  onClick={() => scrollToSection("contact")}
                  endIcon={<ArrowRightIcon />}
                >
                  Get Started Today
                </Button>
              </motion.div>
            </motion.div>
          </Container>
        </Box>

        {/* Company Story Section */}
        <Box
          ref={companyRef}
          sx={{
            py: 8,
            px: 2,
            position: 'relative',
            backgroundImage: 'url(/AI_innovation.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: 400,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Container>
            <Grid container spacing={6} alignItems="center" justifyContent="flex-end">
              <Grid item xs={12} md={7} lg={6} sx={{ mr: 'auto' }}>
                <Box sx={{ bgcolor: 'rgba(255,255,255,0.92)', borderRadius: 4, p: { xs: 3, md: 5 } }}>
                  <Typography variant="h4" fontWeight="bold" mb={3} sx={{ color: '#2b6777' }}>
                    Transforming Business Through AI
                  </Typography>
                  <Typography sx={{ color: '#2b6777', mb: 2, lineHeight: 1.7 }}>
                    Our name — a fusion of <strong>Synergy</strong> and <strong>Simplify</strong> — reflects our mission to harmonize technology with business needs, transforming complex operations into seamless, AI-driven workflows.
                  </Typography>
                  <Typography sx={{ color: '#2b6777', lineHeight: 1.7 }}>
                    We empower businesses to automate processes, enhance productivity, and make data-driven decisions through intelligent AI solutions that adapt and evolve with your needs.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Contact Section */}
        <Box
          id="contact"
          ref={contactRef}
          sx={{
            py: 8,
            px: 2,
            bgcolor: "grey.50",
          }}
        >
          <Container>
            <motion.div initial="hidden" animate={contactInView ? "visible" : "hidden"} variants={staggerContainer}>
              <motion.div variants={fadeIn} sx={{ textAlign: "center", mb: 8 }}>
                
                <Typography
                  variant="h2"
                  fontWeight="bold"
                  mb={3}
                  sx={{ fontSize: { xs: "2.5rem", md: "3.5rem" } }}
                >
                  Get In <GradientTypography component="span" variant="h2" sx={{ fontSize: { xs: "2.5rem", md: "3.5rem" } }}>Touch</GradientTypography>
                </Typography>
                <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800, mx: "auto" }}>
                  Ready to revolutionize your business with AI? Let's start the conversation.
                </Typography>
              </motion.div>

              <motion.div variants={scaleUp} sx={{ maxWidth: 1000, mx: "auto" }}>
                <Card elevation={8} sx={{ overflow: "hidden" }}>
                  <Grid container>
                    {/* Contact Info Sidebar */}
                    <Grid
                      item
                      xs={12}
                      md={5}
                      sx={{ bgcolor: "primary.main", color: "white", p: 4 }}
                    >
                      <Typography variant="h4" fontWeight="bold" mb={4}>
                        Contact Information
                      </Typography>
                      <Box sx={{ display: "flex", flexDirection: "column", gap: 3, mb: 4 }}>
                        <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                          <PhoneIcon sx={{ mr: 2, mt: 0.5, opacity: 0.8 }} />
                          <Box>
                            <Typography fontWeight={500}>Phone</Typography>
                            <Typography sx={{ opacity: 0.8 }}>+92-333-2162005</Typography>
                          </Box>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                          <MailIcon sx={{ mr: 2, mt: 0.5, opacity: 0.8 }} />
                          <Box>
                            <Typography fontWeight={500}>Email</Typography>
                            <Typography sx={{ opacity: 0.8 }}>erajtanweer@thesynergify.com</Typography>
                          </Box>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                          <GlobeIcon sx={{ mr: 2, mt: 0.5, opacity: 0.8 }} />
                          <Box>
                            <Typography fontWeight={500}>Website</Typography>
                            <Typography sx={{ opacity: 0.8 }}>www.thesynergify.com</Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Grid>

                    {/* Contact Form */}
                    <Grid item xs={12} md={7} sx={{ p: 4 }}>
                      <Typography variant="h5" fontWeight="bold" mb={3}>
                        Send us a message
                      </Typography>

                      <form onSubmit={handleSubmit}>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                          <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                              <TextField
                                label="Full Name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                fullWidth
                                required
                              />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <TextField
                                label="Email Address"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                fullWidth
                                required
                              />
                            </Grid>
                          </Grid>
                          <TextField
                            label="Company Name"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            fullWidth
                          />
                          <TextField
                            label="Message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            multiline
                            rows={4}
                            fullWidth
                            required
                          />
                          <Button
                            type="submit"
                            variant="contained"
                            size="large"
                            disabled={isSubmitting}
                            sx={{ alignSelf: "flex-start", px: 4 }}
                            endIcon={<ArrowRightIcon />}
                          >
                            {isSubmitting ? "Sending..." : "Send Message"}
                          </Button>
                        </Box>
                      </form>
                    </Grid>
                  </Grid>
                </Card>
              </motion.div>
            </motion.div>
          </Container>
        </Box>

        {/* Footer */}
        <Box
          ref={footerRef}
          sx={{
            py: 8,
            bgcolor: '#2b6777',
            color: 'white',
            position: 'relative',
            backgroundImage: 'url(/end.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 1,
          }}
        >
          <Container>
            <motion.div initial="hidden" animate={footerInView ? "visible" : "hidden"} variants={staggerContainer}>
              <Grid container spacing={4} sx={{ mb: 6 }}>
                <Grid item xs={12} md={6} lg={4}>
                  <motion.div variants={fadeIn}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
                      <img src="\logo.png" alt="" width="10%" />
                      <Typography variant="h5" fontWeight="bold">
                        The Synergify
                      </Typography>
                    </Box>
                    <Typography sx={{ opacity: 0.8, mb: 3, lineHeight: 1.6 }}>
                      Transforming businesses through intelligent AI solutions. The future of automation starts here.
                    </Typography>
                  </motion.div>
                </Grid>

                <Grid item xs={12} md={6} lg={2}>
                  <motion.div variants={fadeIn}>
                    <Typography variant="h6" fontWeight="bold" mb={2}>
                      Services
                    </Typography>
                    <List disablePadding>
                      {[
                        "Machine Learning",
                        "NLP Solutions",
                        "Process Automation",
                        "Predictive Analytics",
                        "Conversational AI",
                        "Cloud Integration"
                      ].map((service) => (
                        <ListItem key={service} disablePadding>
                          <Typography sx={{ opacity: 0.8, "&:hover": { opacity: 1 }, cursor: "pointer" }}>
                            {service}
                          </Typography>
                        </ListItem>
                      ))}
                    </List>
                  </motion.div>
                </Grid>

                <Grid item xs={12} md={6} lg={2}>
                  <motion.div variants={fadeIn}>
                    <Typography variant="h6" fontWeight="bold" mb={2}>
                      Company
                    </Typography>
                    <List disablePadding>
                      {[
                        "About Us",
                        "Our Team",
                        "Careers",
                        "News & Updates",
                        "Case Studies",
                        "Partners"
                      ].map((item) => (
                        <ListItem key={item} disablePadding>
                          <Typography sx={{ opacity: 0.8, "&:hover": { opacity: 1 }, cursor: "pointer" }}>
                            {item}
                          </Typography>
                        </ListItem>
                      ))}
                    </List>
                  </motion.div>
                </Grid>

               
              </Grid>

              <motion.div variants={fadeIn}>
                <Divider sx={{ bgcolor: alpha("#ffffff", 0.2), mb: 3 }} />
                <Typography align="center" sx={{ opacity: 0.6 }}>
                  © {new Date().getFullYear()} The Synergify | All rights reserved. | Powered by AI Innovation
                </Typography>
              </motion.div>
            </motion.div>
          </Container>
        </Box>

        <Snackbar
          open={alertInfo.open}
          autoHideDuration={6000}
          onClose={() => setAlertInfo({ ...alertInfo, open: false })}
        >
          <Alert severity={alertInfo.severity}>{alertInfo.message}</Alert>
        </Snackbar>

        <ScrollTop />
      </Box>
    </ThemeProvider>
  )
}