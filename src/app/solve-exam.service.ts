export class SolveExamService{
    GetQuestions ()
    {
        return ["Which is private member functions access scope?",
        "Which among the following is true ?",
        "Which member can never be accessed by inherited classes ?"]
      
    }
    GetMultilpleChoices()
    {
        return["Member functions which can only be used within the class",
            "Member functions which can used outside the class",
            "Member functions which are accessible in derived class",
            "Member functions which can’t be accessed inside the class",
            "The private members can’t be accessed by public members of the class",
            "The private members can be accessed by public members of the class",
            "The private members can be accessed only by the private members of the class",
            "The private members can’t be accessed by the protected members of the class",
            "Private member function",
            "Public member function",
            "Protected member function",
            "All can be accessed"]
           
    }

    GetModelAnswer()
    {
        return ["1","2","1"]
    }
    EvaluateDegree()
    {

    }

}