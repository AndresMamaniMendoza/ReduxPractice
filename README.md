
# Task1
# Steps for using Redux:

## Step1: Creating store... (from configureStore.js)
## Step2: Defining reducers... (from courseReducer.js)
## Step3: Defining actions... (from courseActions.js)
## Step4: Connecting components to store... (from Course.js)

![step1](/images/StepRedux/1.png)
![step2](/images/StepRedux/2.png)
![step3](/images/StepRedux/3.png)
![step4](/images/StepRedux/4.png)

# Task2
# Add Course delete using redux.

## To add the functionality to delete a course I follow the steps below:
## Add the action deleteCourse:
![stepCourse1](/images/StepsDeleteCourse/s1.png)

## Add the case "Delete Course" making the filter to contain the state without the course with the title that contains the payload.
![stepCourse2](/images/StepsDeleteCourse/s2.png)

## Add the handleDelete function, which does the dispatch with the action.
![stepCourse3](/images/StepsDeleteCourse/s3.png)

## Add the Button element in the CourseComponent, also add the HandleDelete to the OnClick of the element.
![stepCourse4](/images/StepsDeleteCourse/s4.png)
