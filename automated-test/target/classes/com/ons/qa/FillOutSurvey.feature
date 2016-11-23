Feature: Fill out survey

  Scenario: Customer fills out survey
    Given customer is on the webpage
    When he starts the survey
    And he fills out the survey
      | Fields           | Value |
      | Question1textbox |  2100 |
      | Question2textbox |   500 |
      | Question3textbox |    80 |
    Then the survey should be submitted
