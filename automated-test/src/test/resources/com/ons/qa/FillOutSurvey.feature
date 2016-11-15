Feature: Fill out survey

  Scenario: Customer fills out survey
    Given customer is on the webpage
    When he starts the survey
    When he fills out the survey
    Then the survey should be submitted
