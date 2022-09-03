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
import NotFound from './Pages/Shared/NotFound';
import RequireAuth from './Pages/Login/RequireAuth';
import Form from './Pages/Resume/Form';
import Blogs from './Pages/Blogs/Blogs';
import CvResumeAll from './Pages/Blogs/CvResumeAll';
import CoverLetterAll from './Pages/Blogs/CoverLetterAll';
import InspiringStories from './Pages/Blogs/InspiringStories';
import PersonalDevelopment from './Pages/Blogs/PersonalDevelopment';
import InterviewQuestions from './Pages/Blogs/InterviewQuestions/InterviewQuestions';
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
import InterviewQuesAnsHtml from './Pages/Blogs/InterviewQuestions/InterviewQuesAnsHtml';
import InterviewQuesAnsCSS from './Pages/Blogs/InterviewQuestions/InterviewQuesAnsCSS';
import InterviewQuesAnsReactJS from './Pages/Blogs/InterviewQuestions/InterviewQuesAnsReactJS';
import InterviewQuesAnsRedux from './Pages/Blogs/InterviewQuestions/InterviewQuesAnsRedux';
import InterviewQuesAnsMongoDB from './Pages/Blogs/InterviewQuestions/InterviewQuesAnsMongoDB';
import InterviewQuesAnsJS from './Pages/Blogs/InterviewQuestions/InterviewQuesAnsJS';
import InterviewQuesAnsNodeJS from './Pages/Blogs/InterviewQuestions/InterviewQuesAnsNodeJS';
import MockInterview from './Pages/Blogs/MockInterview/MockInterview';
import MyInterview from './Pages/Dashboard/MyInterview';
import AllCoverLetterTemp from './Pages/Dashboard/AllCoverLetterTemp';
import FindAJob from './Pages/Blogs/FindAJob';
import AdminAuth from './Pages/Dashboard/adminUser/AdminAuth';
import Users from './Pages/Dashboard/adminUser/Users';
import CLBlogDetails from './Pages/Blogs/CLBlogDetails';
import UpdateUserInfo from './Pages/Dashboard/adminUser/UpdateUserInfo';
import BlogManage from './Pages/Dashboard/adminUser/BlogManage';
import Reviews from './Pages/Login/Reviews/Reviews';
import AllReviews from './Pages/Dashboard/adminUser/AllReviews';



function App() {
  return (
    <div className="App">
      <Navbar>

      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        
        <Route path="/resume/form1" element={<ResumeForm1 />} ></Route>
        <Route path="/resume/form2" element={<ResumeForm2 />} ></Route>

        
        {/* normal route */}
        <Route path="/resume" element={
          <Resume />
        }></Route>
        <Route path="/cv" element={
          <Templates></Templates>
        } />
        <Route path="/coverLetter" element={
          <CoverLetter></CoverLetter>
        } />



        {/* require route */}
        <Route path="resume/form" element={
          <RequireAuth>
            <ResumeForm></ResumeForm>
          </RequireAuth>
        } />
        <Route path="cv/form/:id" element={
          <RequireAuth>
            <FormCv></FormCv>
          </RequireAuth>
        } />

        <Route
          path="templateForm/:id"
          element={
            <RequireAuth>
              <TemplateForm />
            </RequireAuth>

          }
        ></Route>
        <Route path="blog" element={
          <RequireAuth>
            <Blogs></Blogs>
          </RequireAuth>
        } />




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
        <Route path="/findAJob" element={<FindAJob> </FindAJob>} />
        <Route path="/mockInterview" element={<MockInterview> </MockInterview>} />

        {/* Blog details  */}
        <Route path="/coverLetterBlog/:cLBlogId" element={<CLBlogDetails />} />
        {/* Dashboard */}
        <Route path="/dashboard" element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }>

          <Route index element={<MyProfile />} />
          <Route path="myInterview" element={<MyInterview />} />
          <Route path="myReview" element={<MyReview />} />
          <Route path="addCvResumeBlog" element={<AddCvResumeBlog />} />
          <Route path="addCoverLetterBlog" element={<AddCoverLetterBlog />} />
          <Route path="addPersonalDevBlog" element={<AddPersonalDevBlog />} />
          <Route path="addInspiringStoriesBlog" element={<AddInspiringBlog />} />
          <Route path="updateinfo" element={<UpdateUserInfo />} />

          <Route path="blogmanage" element={<AdminAuth>
            <BlogManage />
          </AdminAuth>} />
          <Route path="allreview" element={<AdminAuth>
            <AllReviews />
          </AdminAuth>} />

          <Route path="users" element={<AdminAuth>
            <Users />
          </AdminAuth>} />
          {/* add all coverlett template dashboart */}
          <Route path='allcoverlettertemp' element={<AllCoverLetterTemp></AllCoverLetterTemp>}></Route>
        </Route>


        {/* pricing */}
        <Route path='/pricing' element={<PricingCard></PricingCard>}></Route>
        <Route path='paymentCardOne' element={
          <RequireAuth>
            <PaymentCardOne></PaymentCardOne>
          </RequireAuth>
        }></Route>
        <Route path='paymentCardTwo' element={
          <RequireAuth>
            <PaymentCardTwo></PaymentCardTwo>
          </RequireAuth>
        }></Route>
        <Route path='paymentCardThree' element={
          <RequireAuth>
            <PaymentCardThree></PaymentCardThree>
          </RequireAuth>
        }></Route>

        {/* interview question page start */}
        <Route path="/interviewQuestions" element={<InterviewQuestions />} />
        <Route path="/html" element={<InterviewQuesAnsHtml />} />
        <Route path="/css" element={<InterviewQuesAnsCSS />} />
        <Route path="/reactjs" element={<InterviewQuesAnsReactJS />} />
        <Route path="/mongodb" element={<InterviewQuesAnsMongoDB />} />
        <Route path="/js" element={<InterviewQuesAnsJS />} />
        <Route path="/nodejs" element={<InterviewQuesAnsNodeJS />} />
        <Route path="/redux" element={<InterviewQuesAnsRedux />} />

        {/* interview question page end */}



        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>

      <ToastContainer />

    </div >
  );

}

export default App;
