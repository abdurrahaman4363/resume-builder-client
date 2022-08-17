import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Shared/Navbar';
import Footer from './Pages/Shared/Footer';
import Home from './Pages/Home/Home';
import Templates from './Pages/Cv/Templates';
import FormCv from './Pages/Cv/FormCv';
import Login from './Pages/Login/Login';
import CoverLetter from './Pages/CoverLetter/CoverLetter';
import Resume from './Pages/Resume/Resume';
import ResumeForm from './Pages/Resume/ResumeForm';
import SignUp from './Pages/Login/SignUp';
import TemplateForm from './Pages/CoverLetter/TemplateForm';
import About from './Pages/Home/About';
import Contact from './Pages/Home/Contact';
import CoverLetterFinishit from './Pages/CoverLetter/CoverLetterFinishit';
import CoverLetterAbout from './Pages/CoverLetter/CoverLetterAbout';
import NotFound from './Pages/Shared/NotFound';
import RequireAuth from './Pages/Login/RequireAuth';
import Form from './Pages/Resume/Form';
import Blogs from './Pages/Blogs/Blogs';
import CvResumeAll from './Pages/Blogs/CvResumeAll';
import CoverLetterAll from './Pages/Blogs/CoverLetterAll';
import InspiringStories from './Pages/Blogs/InspiringStories';
import PersonalDevelopment from './Pages/Blogs/PersonalDevelopment';
import MockInterview from './Pages/Blogs/MockInterview';
import InterviewQuestions from './Pages/Blogs/InterviewQuestions';
import PricingCard from './Pages/Pricing/PricingCard';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyProfile from './Pages/Dashboard/MyProfile';
import MyReview from './Pages/Dashboard/MyReview';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import AddCvResumeBlog from './Pages/Dashboard/AddCvResumeBlog';
import AddCoverLetterBlog from './Pages/Dashboard/AddCoverLetterBlog';
import AddPersonalDevBlog from './Pages/Dashboard/AddPersonalDevBlog';
import AddInspiringBlog from './Pages/Dashboard/AddInspiringBlog';
import PaymentCardOne from './Pages/Pricing/PaymentCardOne';
import PaymentCardTwo from './Pages/Pricing/PaymentCardTwo';
import PaymentCardThree from './Pages/Pricing/PaymentCardThree';
import ResumeForm1 from './Pages/Resume/ResumeForm1';
import ResumeForm2 from './Pages/Resume/ResumeForm2';



function App() {
  return (
    <div className="App">
      <Navbar>

      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/resume/form" element={<ResumeForm />} ></Route>
        <Route path="/resume/form1" element={<ResumeForm1 />} ></Route>
        <Route path="/resume/form2" element={<ResumeForm2 />} ></Route>
        <Route path="/cv/form" element={<FormCv></FormCv>}></Route>

        <Route
          path="/templateForm"
          element={<TemplateForm></TemplateForm>}
        ></Route>

        <Route
          path="resume"
          element={
            <RequireAuth>
              <Resume />
            </RequireAuth>
          }></Route>

        <Route path="cv" element={
          <RequireAuth>
            <Templates></Templates>
          </RequireAuth>
        } />
        <Route path="coverLetter" element={
          <RequireAuth>
            <CoverLetter></CoverLetter>
          </RequireAuth>
        } />

        <Route path="blog" element={
          <RequireAuth>
            <Blogs></Blogs>
          </RequireAuth>
        } />


        <Route path="/about" element={<CoverLetterAbout />} />
        <Route path='finishit' element={<CoverLetterFinishit></CoverLetterFinishit>} />

        <Route path="/coverLetter" element={<CoverLetter />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path='/form' element={<Form></Form>}></Route>
        {/* Blog  */}
        <Route path="/blogs" element={<Blogs> </Blogs>} />
        <Route path="/cvResumeWriting" element={<CvResumeAll> </CvResumeAll>} />
        <Route path="/coverLetterWriting" element={<CoverLetterAll> </CoverLetterAll>} />
        <Route path="/personalDevelopment" element={<PersonalDevelopment> </PersonalDevelopment>} />
        <Route path="/inspiringStories" element={<InspiringStories> </InspiringStories>} />
        <Route path="/interviewQuestions" element={<InterviewQuestions> </InterviewQuestions>} />
        <Route path="/mockInterview" element={<MockInterview> </MockInterview>} />

        {/* Dashboard */}
        <Route path="dashboard" element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }>
          <Route index element={<MyProfile />} />
          <Route path="review" element={<MyReview />} />
          <Route path="addCvResumeBlog" element={<AddCvResumeBlog />} />
          <Route path="addCoverLetterBlog" element={<AddCoverLetterBlog />} />
          <Route path="addPersonalDevBlog" element={<AddPersonalDevBlog />} />
          <Route path="addInspiringStoriesBlog" element={<AddInspiringBlog />} />
        </Route>

        <Route path='/pricing' element={<PricingCard></PricingCard>}></Route>
        <Route path='/paymentCardOne' element={<PaymentCardOne></PaymentCardOne>}></Route>
        <Route path='/paymentCardTwo' element={<PaymentCardTwo></PaymentCardTwo>}></Route>
        <Route path='/paymentCardThree' element={<PaymentCardThree> </PaymentCardThree>}></Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div >
  );
}

export default App;
